package org.team15.gradation.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.post.PostRepository;
import org.team15.gradation.domain.post.comment.PostComment;
import org.team15.gradation.domain.post.comment.PostCommentRepository;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.post.comment.PostCommentResponseDto;
import org.team15.gradation.web.dto.post.comment.PostCommentSaveRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostCommentService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final PostCommentRepository postCommentRepository;

    @Transactional
    public ResponseEntity save(Long postId, PostCommentSaveRequestDto requestDto, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        User findUser = userRepository.findById(user.getId()).get();
        PostComment postComment = requestDto.toEntity();
        postComment.make(findPost, findUser);

        postCommentRepository.save(postComment);

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity findPostComment(Long postId, SessionUser user) {

        Post findPost = postRepository.findById(postId).orElse(null);

        if (findPost == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPost.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<PostCommentResponseDto> postComments = findPost.getPostComments()
                .stream()
                .map(PostCommentResponseDto::new)
                .collect(Collectors.toList());

        return new ResponseEntity(postComments, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long postCommentId, SessionUser user) {

        PostComment findPostComment = postCommentRepository.findById(postCommentId).orElse(null);

        if (findPostComment == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findPostComment.getPost().getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        postCommentRepository.delete(findPostComment);

        return new ResponseEntity(HttpStatus.OK);
    }
}
