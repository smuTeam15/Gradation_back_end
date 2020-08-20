package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.channel.ChannelResponseDto;
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
    public List<ChannelResponseDto> findMyChannel(Long userId) {
        List<ChannelResponseDto> findChannels = userRepository.findById(userId).get().getChannels()
                .stream()
                .map(ChannelResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < findChannels.size(); i++)
            if (userId.equals(findChannels.get(i).getOwner()))
                findChannels.get(i).setOwner(-1L);

        return findChannels;
    }

    @Transactional
    public Long update(SessionUser user, Long channelId, ChannelUpdateRequestDto requestDto) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2L;
        else if (findChannel.getOwner() != user.getId())
            return -1L;

        findChannel.update(requestDto);

        return channelId;
    }

    @Transactional
    public Long delete(Long channelId, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2L;
        else if (findChannel.getOwner() != user.getId())
            return -1L;

        channelRepository.delete(findChannel);

        return channelId;
    }
}
