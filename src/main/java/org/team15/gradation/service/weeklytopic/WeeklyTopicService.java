package org.team15.gradation.service.weeklytopic;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;
import org.team15.gradation.domain.weeklytopic.WeeklyTopicRepository;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicSaveRequestDto;

@RequiredArgsConstructor
@Service
public class WeeklyTopicService {

    private final ChannelRepository channelRepository;
    private final WeeklyTopicRepository weeklyTopicRepository;

    public ResponseEntity save(WeeklyTopicSaveRequestDto requestDto, SessionUser user) {

        Channel findChannel = channelRepository.findById(requestDto.getChannelId()).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (findChannel.getOwner() != user.getId())
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        WeeklyTopic weeklyTopic = requestDto.toEntity();
        weeklyTopic.createWeeklyTopic(findChannel);

        weeklyTopicRepository.save(weeklyTopic);

        return new ResponseEntity(HttpStatus.OK);
    }
}
