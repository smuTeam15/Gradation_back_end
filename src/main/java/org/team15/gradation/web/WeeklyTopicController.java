package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.weeklytopic.WeeklyTopicService;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicSaveRequestDto;

import javax.xml.ws.Response;

@RequiredArgsConstructor
@RestController
public class WeeklyTopicController {

    private final WeeklyTopicService weeklyTopicService;

    @PostMapping("/api/v1/weeklytopic")
    public ResponseEntity save(@RequestBody WeeklyTopicSaveRequestDto requestDto,
                               @LoginUser SessionUser user) {

        return weeklyTopicService.save(requestDto, user);
    }
}
