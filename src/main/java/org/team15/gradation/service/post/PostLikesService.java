package org.team15.gradation.service.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.post.PostRepository;
import org.team15.gradation.domain.post.likes.PostLikes;
import org.team15.gradation.domain.post.likes.PostLikesRepository;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.post.Likes.PostLikesResponseDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostLikesService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final PostLikesRepository postLikesRepository;

    @Transactional
    public ResponseEntity save(Long postId, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        if (postLikesRepository.findByPostIdAndUserId(postId, user.getId()) != null)
            return new ResponseEntity(HttpStatus.OK);

        User findUser = userRepository.findById(user.getId()).get();
        PostLikes postLikes = new PostLikes();
        postLikes.make(findPost, findUser);

        postLikesRepository.save(postLikes);

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity findPostLikes(Long postId, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<PostLikesResponseDto> findLikes = findPost.getLikes().stream().map(PostLikesResponseDto::new).collect(Collectors.toList());

        return new ResponseEntity(findLikes, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long likesId, SessionUser user) {

        PostLikes findPostLikes = postLikesRepository.findById(likesId).orElse(null);

        if (findPostLikes == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findPostLikes.getPost().getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        postLikesRepository.delete(findPostLikes);

        return new ResponseEntity(HttpStatus.OK);
    }
}
