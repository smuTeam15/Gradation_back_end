package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.service.channel.DailyMissionService;
import org.team15.gradation.web.dto.DailyMissionDeleteRequestDto;
import org.team15.gradation.web.dto.DailyMissionResponseDto;
import org.team15.gradation.web.dto.DailyMissionSaveRequestDto;
import org.team15.gradation.web.dto.DailyMissionUpdateRequestDto;

import javax.mail.Session;
import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class DailyMissionController {
    private final HttpSession httpSession;
    private final DailyMissionService dailyMissionService;
    private final ChannelRepository channelRepository;

    @PostMapping("/api/v1/dailymission")
    public Long save(@RequestBody DailyMissionSaveRequestDto requestDto, @LoginUser SessionUser user) {
        // + 현재 요청의 request에 있는 channelId에서 user가 owner인지 확인하고 insert
        return dailyMissionService.save(requestDto, user);
    }

    @GetMapping("/api/v1/dailymission/{channelId}")
    public List<DailyMissionResponseDto> findById(@PathVariable Long channelId, @LoginUser SessionUser user){
        /*
        * channelId를 기반으로 channel에 현재 세션의 userId가 속해있는지 파악
        *
        * => 이때 service에서 channelRepository.findById를 사용한다면?
        *
        * if(true)
        *   save
        * else
        *   return
        * */

        return dailyMissionService.findMyDailyMission(channelId, user);
    }

    @PutMapping("/api/v1/dailymission/{channelId}")
    public void update(@PathVariable Long channelId, @RequestBody DailyMissionUpdateRequestDto requestDto, @LoginUser SessionUser user){
        /*
         * channelId를 기반으로 channel에 현재 세션의 userId가 속해있는지 파악
         *
         * => 이때 service에서 channelRepository.findById를 사용한다면?
         *
         * if(true)
         *   save
         * else
         *   return
         * */

        dailyMissionService.update(requestDto, user);
    }

    /*
    *
    * */
    @DeleteMapping("/api/v1/dailymission/{channelId}/{dailyMissionId}")
    public ResponseEntity delete(@PathVariable("channelId") Long channelId,
                                 @PathVariable("dailyMissionId") Long dailyMissionId,
                                 @LoginUser SessionUser user){

        System.out.println(channelId + "   " + dailyMissionId);
        //channelId와 SessionUser에서 id가 owner인지 확인하고 requestDto에서 id확인하고 delete

        int result = dailyMissionService.delete(channelId, dailyMissionId , user);

        return new ResponseEntity(HttpStatus.OK);
    }

}
