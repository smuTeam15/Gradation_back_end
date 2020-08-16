package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.domain.dailymission.DailyMissionRepository;
import org.team15.gradation.web.dto.DailyMissionDeleteRequestDto;
import org.team15.gradation.web.dto.DailyMissionResponseDto;
import org.team15.gradation.web.dto.DailyMissionSaveRequestDto;
import org.team15.gradation.web.dto.DailyMissionUpdateRequestDto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DailyMissionService {
    private final DailyMissionRepository dailyMissionRepository;
    private final ChannelRepository channelRepository;

    @Transactional
    public Long save(DailyMissionSaveRequestDto requestDto, SessionUser user) {
        // + 현재 요청의 request에 있는 channelId에서 user가 owner인지 확인하고 insert
        //requestDto 에서 채널 ID를 꺼내와서 매핑을 해줍시다.

        //TODO: 한번의 select
        Optional<Channel> byId = channelRepository.findById(requestDto.getChannelId());

        byId.orElseThrow(() -> new IllegalArgumentException("해당 채널이 없습니다. channelId : " + requestDto.getChannelId()));

        Channel findChannel = byId.get();

        //user is not owner
        if (findChannel.getOwner() != user.getId()) {
            return -1L;
        }

        // 단방향 테스트  먼저
        //TODO : 단방향, 양방향 되나 안되나 모릅니다 양방향이 맞는거같은디? 잘생각해보면 미션에서 채널을 찾아가지 않는다.
        //saveDailyMission을 사용한 이유 : requestDto의 channelId를 dailyMission 객체에 직접 넣을수가 없다.
        //dailyMissionRepository.saveDailyMission(requestDto.getContent(), requestDto.getChannelId());

        // 양방향 매핑
        Channel findCurrChannel = channelRepository.findById(requestDto.getChannelId()).get();
        DailyMission dailyMission = new DailyMission().builder()
                .content(requestDto.getContent())
                .channel(findCurrChannel)
                .build();

        findCurrChannel.getDailyMissions().add(requestDto.toEntity());
        dailyMission.setChannel(findCurrChannel);

        return 2L;
    }

    @Transactional
    public List<DailyMissionResponseDto> findMyDailyMission(Long channelId, @LoginUser SessionUser user) {


        return channelRepository.findById(channelId).get().getDailyMissions()
                .stream()
                .map(DailyMissionResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void update(DailyMissionUpdateRequestDto requestDto, SessionUser user) {

    }

    @Transactional
    public int delete(Long channelId, Long dailyMissionId, SessionUser user) {
        System.out.println("============================= Start ====================");
        Optional<Channel> channel = channelRepository.findById(channelId);
        System.out.println("============================= Finish find ==============");
        channel.orElseThrow(() -> new IllegalArgumentException("IllegalArg"));

        return 1;
    }
}
