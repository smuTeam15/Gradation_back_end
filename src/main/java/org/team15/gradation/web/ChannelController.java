package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.S3Service;
import org.team15.gradation.service.channel.ChannelService;
import org.team15.gradation.web.dto.channel.ChannelResponseDto;
import org.team15.gradation.web.dto.channel.ChannelSaveRequestDto;
import org.team15.gradation.web.dto.channel.ChannelUpdateRequestDto;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ChannelController {

    private final ChannelService channelService;
    private final S3Service s3Service;

    @PostMapping("/api/v1/channel")
    public Long save(@RequestParam("firstPicture") MultipartFile firstPicture,
                     @RequestParam("secondPicture") MultipartFile secondPicture,
                     @RequestParam("description") String description,
                     @RequestParam("category") String category,
                     @RequestParam("firstSchool") String firstSchool,
                     @RequestParam("secondSchool") String secondSchool,
                     @LoginUser SessionUser user) throws IOException {

        ChannelSaveRequestDto requestDto = new ChannelSaveRequestDto(firstSchool, secondSchool, description, category, user.getId());

        final Long save = channelService.save(requestDto, user);

        String firstPictureName = s3Service.upload("FirstPicture", save.toString(), firstPicture);
        String secondPictureName = s3Service.upload("SecondPicture", save.toString(), secondPicture);

        channelService.updatePictureUrl(save, firstPictureName, secondPictureName);

        return save;
    }

    @GetMapping("/api/v1/channel1")
    public List<ChannelResponseDto> findById(@LoginUser SessionUser user) {

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

        final Long result = channelService.update(user, channelId, requestDto);

        if (result == -1L)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        else if (result == -2L)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        s3Service.upload("FirstPicture", result.toString(), firstPicture);
        s3Service.upload("SecondPicture", result.toString(), secondPicture);

        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/api/v1/channel/{channelId}")
    public ResponseEntity delete(@PathVariable Long channelId, @LoginUser SessionUser user) {

        final Long result = channelService.delete(channelId, user);

        if (result == -1L)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        else if (result == -2L)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        s3Service.delete("FirstPicture", result.toString());
        s3Service.delete("SecondPicture", result.toString());

        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/api/v1/channel/{channelCode}")
    public ResponseEntity joinChannel(@PathVariable("channelCode") String channelCode,
                                      @LoginUser SessionUser user) {

        return channelService.joinChannel(channelCode, user);
    }
}
