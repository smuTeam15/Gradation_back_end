package org.team15.gradation.service.channel;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.domain.user.userhaschannel.UserHasChannel;
import org.team15.gradation.domain.user.userhaschannel.UserHasChannelRepository;
import org.team15.gradation.web.dto.channel.ChannelResponseDto;
import org.team15.gradation.web.dto.channel.ChannelSaveRequestDto;
import org.team15.gradation.web.dto.channel.ChannelUpdateRequestDto;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChannelService {

    private final UserRepository userRepository;
    private final ChannelRepository channelRepository;
    private final UserHasChannelRepository userHasChannelRepository;

    @Transactional
    public Long save(ChannelSaveRequestDto requestDto, SessionUser user) {

        Channel saveChannel = requestDto.toEntity();
        User findUser = userRepository.findById(user.getId()).get();
        UserHasChannel userHasChannel = new UserHasChannel();

        userHasChannel.makeUserHasChannel(findUser, saveChannel);

        while (true) {
            String channelCode = makeChannelCode();

            if (channelRepository.findByCode(channelCode) == null) {
                saveChannel.setCode(channelCode);
                break;
            }
        }

        userHasChannelRepository.save(userHasChannel);

        return channelRepository.save(saveChannel).getId();
    }

    @Transactional(readOnly = true)
    public List<ChannelResponseDto> findMyChannel(Long userId) {
        List<ChannelResponseDto> findChannels = userRepository.findById(userId).get().getChannels()
                .stream()
                .map(ChannelResponseDto::new)
                .collect(Collectors.toList());

        return findChannels;
    }

    @Transactional
    public Long update(SessionUser user, Long channelId, ChannelUpdateRequestDto requestDto) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2L;
        else if (findChannel.getOwner().equals(user.getId()))
            return -1L;

        findChannel.update(requestDto);

        return channelId;
    }

    @Transactional
    public Long delete(Long channelId, SessionUser user) {

        Channel findChannel = channelRepository.findById(channelId).orElse(null);

        if (findChannel == null)
            return -2L;
        else if (!findChannel.getOwner().equals(user.getId()))
            return -1L;

        channelRepository.delete(findChannel);

        return channelId;
    }

    @Transactional
    private String makeChannelCode() {
        int passwordLength = 8;
        final char[] passwordTable = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '!', '@', '#', '$', '%', '^', '&', '8'};
        int tableLength = passwordTable.length;
        Random random = new Random(System.currentTimeMillis());
        StringBuffer buffer = new StringBuffer();

        for (int i = 0; i < passwordLength; i++)
            buffer.append(passwordTable[random.nextInt(tableLength)]);

        return buffer.toString();
    }

    public ResponseEntity joinChannel(String channelCode, SessionUser user) {

        Channel findChannel = channelRepository.findByCode(channelCode);
        User findUser = userRepository.findById(user.getId()).orElse(null);

        if (findChannel == null || findUser == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        UserHasChannel userHasChannel = new UserHasChannel();
        userHasChannel.makeUserHasChannel(findUser, findChannel);

        userHasChannelRepository.save(userHasChannel);

        return new ResponseEntity(HttpStatus.OK);
    }

    public void updatePictureUrl(Long channelId, String firstPictureName, String secondPictureName) {

        channelRepository.updatePictureUrl(channelId, firstPictureName, secondPictureName);
    }
}
