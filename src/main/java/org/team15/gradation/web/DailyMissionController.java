package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.channel.DailyMissionService;
import org.team15.gradation.web.dto.dailymission.DailyMissionSaveRequestDto;
import org.team15.gradation.web.dto.dailymission.DailyMissionUpdateRequestDto;

@RequiredArgsConstructor
@RestController
public class DailyMissionController {

    private final DailyMissionService dailyMissionService;

    @PostMapping("/api/v1/dailymission")
    public ResponseEntity save(@RequestBody DailyMissionSaveRequestDto requestDto,
                               @LoginUser SessionUser user) {

        return dailyMissionService.save(requestDto, user);
    }

    @GetMapping("/api/v1/dailymission/{channelId}")
    public ResponseEntity findById(@PathVariable Long channelId, @LoginUser SessionUser user) {

        return dailyMissionService.findMyDailyMission(channelId, user);
    }

    @PutMapping("/api/v1/dailymission/{channelId}")
    public ResponseEntity update(@PathVariable Long channelId,
                                 @RequestBody DailyMissionUpdateRequestDto requestDto,
                                 @LoginUser SessionUser user) {

        return dailyMissionService.update(channelId, requestDto, user);
    }

    @DeleteMapping("/api/v1/dailymission/{channelId}/{dailyMissionId}")
    public ResponseEntity delete(@PathVariable("channelId") Long channelId,
                                 @PathVariable("dailyMissionId") Long dailyMissionId,
                                 @LoginUser SessionUser user) {

        return dailyMissionService.delete(channelId, dailyMissionId, user);
    }
}
