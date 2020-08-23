package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.weeklytopic.WeeklyTopicCommentService;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicCommentSaveRequestDto;

@RequiredArgsConstructor
@RestController
public class WeeklyTopicCommentController {

    private final WeeklyTopicCommentService weeklyTopicCommentService;

    @PostMapping("/api/v1/weeklytopic/comment/{weeklyTopicId}")
    public ResponseEntity save(@PathVariable("weeklyTopicId") Long weeklyTopicId,
                               @RequestBody WeeklyTopicCommentSaveRequestDto requestDto,
                               @LoginUser SessionUser user) {

        return weeklyTopicCommentService.save(weeklyTopicId, requestDto, user);
    }

    @GetMapping("/api/v1/weeklytopic/comment/{weeklyTopicId}")
    public ResponseEntity findById(@PathVariable("weeklyTopicId") Long weeklyTopicId,
                                   @LoginUser SessionUser user) {

        return weeklyTopicCommentService.findWeeklyTopicComment(weeklyTopicId, user);
    }

    @DeleteMapping("/api/v1/weeklytopic/comment/{weeklyTopicCommentId}")
    public ResponseEntity delete(@PathVariable("weeklyTopicCommentId") Long weeklyTopicCommentId,
                                 @LoginUser SessionUser user) {

        return weeklyTopicCommentService.delete(weeklyTopicCommentId, user);
    }
}
