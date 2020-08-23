package org.team15.gradation.service.weeklytopic;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;
import org.team15.gradation.domain.weeklytopic.WeeklyTopicRepository;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicResponseDto;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicSaveRequestDto;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicUpdateRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class WeeklyTopicService {

    private final ChannelRepository channelRepository;
    private final WeeklyTopicRepository weeklyTopicRepository;

    @Transactional
    public ResponseEntity save(Long channelId, WeeklyTopicSaveRequestDto requestDto, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findChannel.getOwner().equals(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        WeeklyTopic weeklyTopic = requestDto.toEntity();
        weeklyTopic.createWeeklyTopic(findChannel);

        weeklyTopicRepository.save(weeklyTopic);

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity findWeeklyTopic(Long channelId, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findChannel.isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<WeeklyTopicResponseDto> weeklyTopics = findChannel.getWeeklyTopics()
                .stream()
                .map(WeeklyTopicResponseDto::new)
                .collect(Collectors.toList());

        return new ResponseEntity(weeklyTopics, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity update(Long weeklyTopicId, WeeklyTopicUpdateRequestDto requestDto, SessionUser user) {

        WeeklyTopic findWeeklyTopic = weeklyTopicRepository.findById(weeklyTopicId).orElse(null);

        if (findWeeklyTopic == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findWeeklyTopic.getChannel().getOwner().equals(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        findWeeklyTopic.update(requestDto);

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long weeklyTopicId, SessionUser user) {

        WeeklyTopic findWeeklyTopic = weeklyTopicRepository.findById(weeklyTopicId).orElse(null);

        if (findWeeklyTopic == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findWeeklyTopic.getChannel().getOwner().equals(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        weeklyTopicRepository.delete(findWeeklyTopic);

        return new ResponseEntity(HttpStatus.OK);
    }
}
