package org.team15.gradation.service.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.post.PostRepository;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.post.PostListResponseDto;
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
    public int save(PostSaveRequestDto requestDto){

        Channel findChannel = channelRepository.findById(requestDto.getUserId()).orElse(null);

        if(findChannel == null)
            return -2;
        else if(!findChannel.isMember(requestDto.getUserId()))
            return -1;

        requestDto.toEntity(findChannel, userRepository.findById(requestDto.getUserId()).get());

        return 1;
    }

    public ResponseEntity findPosts(Long channelId, SessionUser user) {

        //PostRepository에서 channel_id로 한번에 검색할 수 있다면?

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if(findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if(!findChannel.isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        //post 객체 목록을 찾기
        List<PostListResponseDto> posts = findChannel.getPosts().stream().map(PostListResponseDto::new).collect(Collectors.toList());

        //좋아요 찾기 : 검색한 post id를 기반으로 찾아오기, LikeService에서 find 메소드를 만들까
        //여기서 직접 사용할까, LikeService에서 하나만 불러올 일이 있을까
        //확장성으로 Like서비스로 가자

        //댓글 찾기


        return new ResponseEntity(posts, HttpStatus.OK);
    }

}
