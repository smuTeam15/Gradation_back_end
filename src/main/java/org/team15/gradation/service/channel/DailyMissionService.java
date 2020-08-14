package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.domain.dailymission.DailyMissionRepository;
import org.team15.gradation.web.dto.DailyMissionSaveRequestDto;

@RequiredArgsConstructor
@Service
public class DailyMissionService {
    private final DailyMissionRepository dailyMissionRepository;
    private final ChannelRepository channelRepository;

    public Long save(DailyMissionSaveRequestDto requestDto) {
        DailyMission dailyMission = requestDto.toEntity();

        return dailyMissionRepository.save(dailyMission).getId();
    }
}
