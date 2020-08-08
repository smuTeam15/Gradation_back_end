package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.web.dto.ChannelListResponseDto;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ChannelService {
    private final ChannelRepository channelRepository;

    @Transactional
    public Long save(ChannelSaveRequestDto requestDto){
        return channelRepository.save(requestDto.toEntity()).getChannel_id();
    }

    @Transactional
    public List<ChannelListResponseDto> findMyChannel(Long id){
        Optional<Channel> channelList =  channelRepository.findById(id);
        //channelRepository.findAllById()
        return null;
    }

    @Transactional
    public Long update(Long id){
        //구현
        return 0L;
    }

    @Transactional
    public void delete (Long id){
        Channel channel = channelRepository.findById(id).orElseThrow(() -> new
                IllegalArgumentException("삭제 단계에서 해당 Channel이 없습니다. id = " + id));

        channelRepository.delete(channel);
    }
}
