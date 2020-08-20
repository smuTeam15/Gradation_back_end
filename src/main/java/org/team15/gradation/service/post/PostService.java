package org.team15.gradation.service.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.post.PostRepository;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.post.PostResponseDto;
import org.team15.gradation.web.dto.post.PostSaveRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;
    private final ChannelRepository channelRepository;
    private final UserRepository userRepository;

    @Transactional
    public Long save(PostSaveRequestDto requestDto){

        Channel findChannel = channelRepository.findById(requestDto.getChannelId()).orElse(null);

        if(findChannel == null)
            return -2L;
        else if(!findChannel.isMember(requestDto.getUserId()))
            return -1L;

        Post savePost = requestDto.toEntity();

        savePost.makePost(findChannel, userRepository.findById(requestDto.getUserId()).get());

        return postRepository.save(savePost).getId();
    }

    public ResponseEntity findPosts(Long channelId, SessionUser user) {

        //채널을 먼저 찾아야 허가된 유저인지 확인이 가능함

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if(findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if(!findChannel.isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        //post와 like 보내주기
        List<PostResponseDto> posts = findChannel.getPosts().stream().map(PostResponseDto::new).collect(Collectors.toList());



        //좋아요 찾기 : 검색한 post id를 기반으로 찾아오기, LikeService에서 find 메소드를 만들까
        //여기서 직접 사용할까, LikeService에서 하나만 불러올 일이 있을까
        //확장성으로 Like서비스로 가자
        //결국  라이크를 눌렀다 뗏다 때문에 서비스를 만들어야한다.
        //여기서는 라이크를 찾아서 보내주는게 맞는거 같다.
        //post도 모르는데 어케 사용자는 압니까
        //댓글도 찾아서 보내줘야하제, 이것도 미리


        return new ResponseEntity(posts, HttpStatus.OK);
    }

}
