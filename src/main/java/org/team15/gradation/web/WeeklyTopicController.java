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

    @PostMapping("/api/v1/weeklytopic")
    public ResponseEntity save(@RequestBody WeeklyTopicSaveRequestDto requestDto,
                               @LoginUser SessionUser user) {

        return weeklyTopicService.save(requestDto, user);
    }

    @GetMapping("/api/v1/weeklytopic/{channelId}")
    public ResponseEntity findById(@PathVariable("channelId") Long channelId,
                                   @LoginUser SessionUser user) {

        return weeklyTopicService.findWeeklyTopic(channelId, user);
    }

    @PutMapping("/api/v1/weeklytopic/{channelId}")
    public ResponseEntity update(@PathVariable("channelId") Long channelId,
                                 @RequestBody WeeklyTopicUpdateRequestDto weeklyTopicUpdateRequestDto,
                                 @LoginUser SessionUser user) {

        return weeklyTopicService.update(channelId, weeklyTopicUpdateRequestDto, user);
    }

    @DeleteMapping("/api/v1/weeklytopic/{channelId}/{weeklyTopicId}")
    public ResponseEntity delete(@PathVariable("channelId") Long channelId,
                                 @PathVariable("weeklyTopicId") Long weeklyTopicId,
                                 @LoginUser SessionUser user) {

        return weeklyTopicService.delete(channelId, weeklyTopicId, user);
    }
}
