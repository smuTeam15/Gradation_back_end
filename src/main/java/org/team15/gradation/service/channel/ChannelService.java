package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.channel.ChannelListResponseDto;
import org.team15.gradation.web.dto.channel.ChannelSaveRequestDto;
import org.team15.gradation.web.dto.channel.ChannelUpdateRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChannelService {

    private final UserRepository userRepository;
    private final ChannelRepository channelRepository;

    @Transactional
    public Long save(ChannelSaveRequestDto requestDto, SessionUser user) {

        Channel saveChannel = requestDto.toEntity();

        userRepository.findById(user.getId()).get().getChannels().add(saveChannel);

        return channelRepository.save(saveChannel).getId();
    }

    @Transactional(readOnly = true)
    public List<ChannelListResponseDto> findMyChannel(Long userId) {
        List<ChannelListResponseDto> findChannels = userRepository.findById(userId).get().getChannels()
                .stream()
                .map(ChannelListResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < findChannels.size(); i++)
            if (userId != findChannels.get(i).getOwner())
                findChannels.get(i).setOwner(-1L);

        return findChannels;
    }

    @Transactional
    public int update(SessionUser user, Long channelId, ChannelUpdateRequestDto requestDto) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2;
        else if (findChannel.getOwner() != user.getId())
            return -1;

        findChannel.update(requestDto);

        return 1;
    }

    @Transactional
    public int delete(Long channelId, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2;
        else if (findChannel.getOwner() != user.getId())
            return -1;

        channelRepository.delete(findChannel);

        return 1;
    }
}
