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

        if (save == -1) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        } else if (save == -2) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        s3Service.upload("Post", save.toString(), picture);

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/api/v1/post/{channelId}")
    public ResponseEntity findById(@PathVariable("channelId") Long channelId,
                         @LoginUser SessionUser user) {
        //채널에 들어오면 채널내 모든 post를 뱉어내고 각각 likes와 comment까지 뱉어야함
        //그러면 필요한 채널 id를 주고 그 안에 user가 멤버로 속해있는지 확인 할것 ㅇㅋ?

        return postService.findPosts(channelId, user);
    }

    @PutMapping("/api/v1/post")
    public void update() {
    }

    @DeleteMapping("/api/v1/post")
    public void delete(@PathVariable Long channelId, @LoginUser SessionUser user) {
    }
}
