package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.channel.DailyMissionService;
import org.team15.gradation.web.dto.DailyMissionSaveRequestDto;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class DailyMissionController {
    private final HttpSession httpSession;
    private final DailyMissionService dailyMissionService;

    @PostMapping("/api/v1/dailymission")
    public Long save(@RequestBody DailyMissionSaveRequestDto requestDto) {
        SessionUser user = (SessionUser) httpSession.getAttribute("user");

        return dailyMissionService.save(requestDto);
    }

}
