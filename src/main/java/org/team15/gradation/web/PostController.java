package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.S3Service;
import org.team15.gradation.service.post.PostService;
import org.team15.gradation.web.dto.PostUpdateRequestDto;
import org.team15.gradation.web.dto.post.PostSaveRequestDto;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
public class PostController {

    private final PostService postService;
    private final S3Service s3Service;

    @PostMapping("/api/v1/post")
    public ResponseEntity save(@RequestParam("picture") MultipartFile picture,
                               @RequestParam("content") String content,
                               @RequestParam("channelId") Long channelId,
                               @LoginUser SessionUser user) throws IOException {

        PostSaveRequestDto requestDto = new PostSaveRequestDto(content, user.getId(), channelId);

        final Long save = postService.save(requestDto);

        if (save == -1L) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        } else if (save == -2L) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        s3Service.upload("Post", save.toString(), picture);

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/api/v1/post/{channelId}")
    public ResponseEntity findById(@PathVariable("channelId") Long channelId,
                                   @LoginUser SessionUser user) {

        return postService.findPosts(channelId, user);
    }

    @PutMapping("/api/v1/post/{postId}")
    public ResponseEntity update(@PathVariable("postId") Long postId,
                                 @RequestParam("picture") MultipartFile picture,
                                 @RequestParam("content") String content,
                                 @LoginUser SessionUser user) throws IOException {

        PostUpdateRequestDto requestDto = new PostUpdateRequestDto(content);

        final Long result = postService.update(postId, requestDto, user);

        if (result == -1L)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        else if (result == -2L)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        s3Service.upload("Post", result.toString(), picture);

        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/api/v1/post")
    public void delete(@PathVariable Long channelId, @LoginUser SessionUser user) {
    }
}
