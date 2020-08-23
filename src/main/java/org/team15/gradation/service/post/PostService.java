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
import org.team15.gradation.web.dto.PostUpdateRequestDto;
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
    public Long save(Long channelId, PostSaveRequestDto requestDto, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2L;
        else if (!findChannel.isMember(user.getId()))
            return -1L;

        Post savePost = requestDto.toEntity();

        savePost.makePost(findChannel, userRepository.findById(user.getId()).get());

        return postRepository.save(savePost).getId();
    }

    @Transactional
    public ResponseEntity findPosts(Long channelId, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findChannel.isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<PostResponseDto> posts = findChannel.getPosts().stream().map(PostResponseDto::new).collect(Collectors.toList());

        return new ResponseEntity(posts, HttpStatus.OK);
    }

    @Transactional
    public Long update(Long postId, PostUpdateRequestDto requestDto, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return -2L;
        else if (!findPost.getChannel().isMember(user.getId()))
            return -1L;

        findPost.update(requestDto);

        return postId;
    }

    @Transactional
    public ResponseEntity delete(Long postId, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        postRepository.delete(findPost);

        return new ResponseEntity(HttpStatus.OK);
    }
}
