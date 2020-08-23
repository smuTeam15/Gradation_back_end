package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.PostCommentService;
import org.team15.gradation.web.dto.post.comment.PostCommentSaveRequestDto;

@RequiredArgsConstructor
@RestController
public class PostCommentController {

    private final PostCommentService postCommentService;

    @PostMapping("/api/v1/post/comment/{postId}")
    public ResponseEntity save(@PathVariable("postId") Long postId,
                               @RequestBody PostCommentSaveRequestDto requestDto,
                               @LoginUser SessionUser user) {

        return postCommentService.save(postId, requestDto, user);
    }

    @GetMapping("/api/v1/post/comment/{postId}")
    public ResponseEntity findPostComment(@PathVariable("postId") Long postId,
                                          @LoginUser SessionUser user) {

        return postCommentService.findPostComment(postId, user);
    }

    @DeleteMapping("/api/v1/post/comment/{postCommentId}")
    public ResponseEntity delete(@PathVariable("postCommentId") Long postCommentId,
                                 @LoginUser SessionUser user) {

        return postCommentService.delete(postCommentId, user);
    }
}
