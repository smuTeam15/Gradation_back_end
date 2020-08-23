package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.weeklytopic.WeeklyTopicService;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicSaveRequestDto;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicUpdateRequestDto;

@RequiredArgsConstructor
@RestController
public class WeeklyTopicController {

    private final WeeklyTopicService weeklyTopicService;

    @PostMapping("/api/v1/weeklytopic/{channelId}")
    public ResponseEntity save(@PathVariable("channelId") Long channelId,
                               @RequestBody WeeklyTopicSaveRequestDto requestDto,
                               @LoginUser SessionUser user) {

        return weeklyTopicService.save(channelId, requestDto, user);
    }

    @GetMapping("/api/v1/weeklytopic/{channelId}")
    public ResponseEntity findById(@PathVariable("channelId") Long channelId,
                                   @LoginUser SessionUser user) {

        return weeklyTopicService.findWeeklyTopic(channelId, user);
    }

    @PutMapping("/api/v1/weeklytopic/{weeklyTopicId}")
    public ResponseEntity update(@PathVariable("weeklyTopicId") Long weeklyTopicId,
                                 @RequestBody WeeklyTopicUpdateRequestDto weeklyTopicUpdateRequestDto,
                                 @LoginUser SessionUser user) {

        return weeklyTopicService.update(weeklyTopicId, weeklyTopicUpdateRequestDto, user);
    }

    @DeleteMapping("/api/v1/weeklytopic/{weeklyTopicId}")
    public ResponseEntity delete(@PathVariable("weeklyTopicId") Long weeklyTopicId,
                                 @LoginUser SessionUser user) {

        return weeklyTopicService.delete(weeklyTopicId, user);
    }
}
