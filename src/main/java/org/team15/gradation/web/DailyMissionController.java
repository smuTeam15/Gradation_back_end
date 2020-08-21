package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.S3Service;
import org.team15.gradation.service.channel.DailyMissionService;
import org.team15.gradation.web.dto.dailymission.DailyMissionSaveRequestDto;
import org.team15.gradation.web.dto.dailymission.DailyMissionUpdateRequestDto;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
public class DailyMissionController {

    private final DailyMissionService dailyMissionService;
    private final S3Service s3Service;

    @PostMapping("/api/v1/dailymission")
    public ResponseEntity save(@RequestParam("picture") MultipartFile picture,
                               @RequestParam("content") String content,
                               @RequestParam("channelId") Long channelId,
                               @LoginUser SessionUser user) throws IOException {

        DailyMissionSaveRequestDto requestDto = new DailyMissionSaveRequestDto(content, channelId);

        final Long save = dailyMissionService.save(requestDto, user);

        if (save == -1L)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        else if (save == -2L)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        s3Service.upload("DailyMission", save.toString(), picture);

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/api/v1/dailymission/{channelId}")
    public ResponseEntity findById(@PathVariable Long channelId, @LoginUser SessionUser user) {

        return dailyMissionService.findMyDailyMission(channelId, user);
    }

    @PutMapping("/api/v1/dailymission/{channelId}")
    public ResponseEntity update(@PathVariable Long channelId,
                                 @RequestParam("id") Long id,
                                 @RequestParam("content") String content,
                                 @RequestParam("picture") MultipartFile picture,
                                 @LoginUser SessionUser user) throws IOException {

        DailyMissionUpdateRequestDto requestDto = new DailyMissionUpdateRequestDto(id, content);

        final Long result = dailyMissionService.update(channelId, requestDto, user);

        if (result == -1L)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        else if (result == -2L)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        s3Service.upload("DailyMission", result.toString(), picture);

        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/api/v1/dailymission/{channelId}/{dailyMissionId}")
    public ResponseEntity delete(@PathVariable("channelId") Long channelId,
                                 @PathVariable("dailyMissionId") Long dailyMissionId,
                                 @LoginUser SessionUser user) {

        final Long result = dailyMissionService.delete(channelId, dailyMissionId, user);

        if (result == -1L)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        else if (result == -2L)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        s3Service.delete("DailyMission", result.toString());

        return new ResponseEntity(HttpStatus.OK);
    }
}
