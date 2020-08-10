package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.web.dto.ChannelListResponseDto;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChannelService {
    private final ChannelRepository channelRepository;

    @Transactional
    public Long save(ChannelSaveRequestDto requestDto){
        return channelRepository.save(requestDto.toEntity()).getChannel_id();
    }

    @Transactional(readOnly = true)
    public List<ChannelListResponseDto> findMyChannel(Long id){
        return channelRepository.findMyChannelsById(id)
                .stream()
                .map(ChannelListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Long update(Long id, ChannelSaveRequestDto requestDto){
        Channel channel = channelRepository.findById(id).orElseThrow(() -> new
                IllegalArgumentException("해당 게시글이 없습니다. id" + id));

        channel.update(requestDto.getTitle(), requestDto.getCategory(), requestDto.getPicture());

        return id;
    }

    @Transactional
    public void delete (Long id){
        Channel channel = channelRepository.findById(id).orElseThrow(() -> new
                IllegalArgumentException("삭제 단계에서 해당 Channel이 없습니다. id = " + id));

        channelRepository.delete(channel);
    }
}
