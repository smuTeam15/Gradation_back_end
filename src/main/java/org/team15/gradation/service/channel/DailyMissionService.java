package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.domain.dailymission.DailyMissionRepository;
import org.team15.gradation.web.dto.dailymission.DailyMissionResponseDto;
import org.team15.gradation.web.dto.dailymission.DailyMissionSaveRequestDto;
import org.team15.gradation.web.dto.dailymission.DailyMissionUpdateRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DailyMissionService {
    private final DailyMissionRepository dailyMissionRepository;
    private final ChannelRepository channelRepository;

    @Transactional
    public ResponseEntity save(DailyMissionSaveRequestDto requestDto, SessionUser user) {

        Channel findChannel = channelRepository.findById(requestDto.getChannelId()).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findChannel.getOwner() != user.getId())
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        DailyMission dailyMission = new DailyMission().builder()
                .content(requestDto.getContent())
                .channel(findChannel)
                .build();

        dailyMission.createDailyMission(findChannel);
        dailyMissionRepository.save(dailyMission).getId();

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity findMyDailyMission(Long channelId, @LoginUser SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findChannel.isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<DailyMissionResponseDto> dailyMissions = findChannel.getDailyMissions()
                .stream()
                .map(DailyMissionResponseDto::new)
                .collect(Collectors.toList());

        return new ResponseEntity(dailyMissions, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity update(Long channelId, DailyMissionUpdateRequestDto requestDto, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findChannel.getOwner() != user.getId())
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        DailyMission findDailyMission = dailyMissionRepository.findById(requestDto.getId()).orElse(null);

        if (findDailyMission == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        findDailyMission.update(requestDto.getContent());

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long channelId, Long dailyMissionId, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findChannel.getOwner() != user.getId())
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        DailyMission findDailyMission = dailyMissionRepository.findById(dailyMissionId).orElse(null);

        if (findDailyMission == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        dailyMissionRepository.delete(findDailyMission);

        return new ResponseEntity(HttpStatus.OK);
    }
}
