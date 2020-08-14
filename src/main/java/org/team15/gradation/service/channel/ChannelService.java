package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.web.dto.ChannelListResponseDto;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChannelService {
    private final UserRepository userRepository;
    private final ChannelRepository channelRepository;


    @Transactional
    public Long save(User user, ChannelSaveRequestDto requestDto){
        Channel channel = requestDto.toEntity(user.getId());

        user.inrollChannel(channel);

        return channelRepository.save(channel).getId();
    }

    @Transactional(readOnly = true)
    public List<ChannelListResponseDto> findMyChannel(Long userId){
        List<ChannelListResponseDto> findChannels = userRepository.findById(userId).get().getChannels()
                .stream()
                .map(ChannelListResponseDto::new)
                .collect(Collectors.toList());

        for(int i = 0; i < findChannels.size(); i++)
            if(userId != findChannels.get(i).getOwner())
                findChannels.get(i).setOwner(-1L);

        return findChannels;
    }

    @Transactional
    public Long update(Long userId, Long channelId, ChannelSaveRequestDto requestDto){
        //게시글이 있는지 확인
        Channel channel = channelRepository.findById(channelId).orElseThrow(() -> new
                IllegalArgumentException("해당 게시글이 없습니다. id" + channelId));

        //해당 멤버인지 확인
        if(!channel.getUsers().contains(userId)){
            throw new IllegalArgumentException("해당 채널의 멤버가 아닙니다. userId" + userId + " channelId " + channelId);
        }

        channel.update(requestDto.getFirstSchool(), requestDto.getSecondSchool(), requestDto.getDescription(), requestDto.getCategory(), requestDto.getFirstPicture(), requestDto.getSecondPicture());

        return channelId;
    }

    @Transactional
    public void delete (Long channelId){
        //update 와 비슷하게 채널에속한 멤버만 삭제 가능하게 할까?
        Channel channel = channelRepository.findById(channelId).orElseThrow(() -> new
                IllegalArgumentException("삭제 단계에서 해당 Channel이 없습니다. chennelId = " + channelId));

        channelRepository.delete(channel);
    }
}
