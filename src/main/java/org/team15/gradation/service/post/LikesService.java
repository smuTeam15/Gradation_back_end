package org.team15.gradation.service.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.likes.Likes;
import org.team15.gradation.domain.likes.LikesRepository;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.post.PostRepository;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.post.Likes.LikesResponseDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LikesService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final LikesRepository likesRepository;

    @Transactional
    public ResponseEntity save(Long postId, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        if (likesRepository.findByUserId(user.getId()) != null)
            return new ResponseEntity(HttpStatus.OK);

        User findUser = userRepository.findById(user.getId()).get();
        Likes likes = new Likes(findPost, findUser);
        likes.make(findPost, findUser);

        likesRepository.save(likes);

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity findLikes(Long postId, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<LikesResponseDto> findLikes = findPost.getLikes().stream().map(LikesResponseDto::new).collect(Collectors.toList());

        return new ResponseEntity(findLikes, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long likesId, SessionUser user) {

        Likes findLikes = likesRepository.findById(likesId).orElse(null);

        if (findLikes == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findLikes.getPost().getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        likesRepository.delete(findLikes);

        return new ResponseEntity(HttpStatus.OK);
    }
}
