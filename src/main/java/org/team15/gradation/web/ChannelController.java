package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.channel.ChannelService;
import org.team15.gradation.web.dto.channel.ChannelListResponseDto;
import org.team15.gradation.web.dto.channel.ChannelSaveRequestDto;
import org.team15.gradation.web.dto.channel.ChannelUpdateRequestDto;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ChannelController {

    private final ChannelService channelService;

    @PostMapping("/api/v1/channel")
    public Long save(@RequestParam("firstPicture") MultipartFile firstPicture,
                     @RequestParam("secondPicture") MultipartFile secondPicture,
                     @RequestParam("description") String description,
                     @RequestParam("category") String category,
                     @RequestParam("firstSchool") String firstSchool,
                     @RequestParam("secondSchool") String secondSchool,
                     @LoginUser SessionUser user) throws IOException {

        ChannelSaveRequestDto requestDto = new ChannelSaveRequestDto(firstSchool, secondSchool, description, category, firstPicture.getBytes(), secondPicture.getBytes(), user.getId());

        return channelService.save(requestDto, user);
    }

    @GetMapping("/api/v1/channel1")
    public List<ChannelListResponseDto> findById(@LoginUser SessionUser user) {

        return channelService.findMyChannel(user.getId());
    }

    @PutMapping("/api/v1/channel/{channelId}")
    public ResponseEntity update(@PathVariable Long channelId,
                                 @RequestParam("firstPicture") MultipartFile firstPicture,
                                 @RequestParam("secondPicture") MultipartFile secondPicture,
                                 @RequestParam("description") String description,
                                 @RequestParam("category") String category,
                                 @RequestParam("firstSchool") String firstSchool,
                                 @RequestParam("secondSchool") String secondSchool,
                                 @LoginUser SessionUser user) throws IOException {

        ChannelUpdateRequestDto requestDto = new ChannelUpdateRequestDto(firstSchool, secondSchool, description, category, firstPicture.getBytes(), secondPicture.getBytes());

        final int result = channelService.update(user, channelId, requestDto);

        switch (result) {
            case -1:
                return new ResponseEntity(HttpStatus.FORBIDDEN);
            case -2:
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            default:
                return new ResponseEntity(HttpStatus.OK);
        }
    }

    @DeleteMapping("/api/v1/channel/{channelId}")
    public ResponseEntity delete(@PathVariable Long channelId, @LoginUser SessionUser user) {

        final int result = channelService.delete(channelId, user);

        switch (result) {
            case -1:
                return new ResponseEntity(HttpStatus.FORBIDDEN);
            case -2:
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            default:
                return new ResponseEntity(HttpStatus.OK);
        }
    }
}
