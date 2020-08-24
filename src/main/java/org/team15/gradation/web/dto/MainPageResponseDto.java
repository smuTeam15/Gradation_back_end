package org.team15.gradation.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.team15.gradation.web.dto.channel.ChannelResponseDto;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class MainPageResponseDto {

    private Long userId;
    private String userName;
    private String picture;
    private List<ChannelResponseDto> channelList = new ArrayList<>();

    public void update(Long userId, String userName, String picture, List<ChannelResponseDto> channelList) {
        this.userId = userId;
        this.userName = userName;
        this.picture = picture;
        this.channelList = channelList;
    }
}
