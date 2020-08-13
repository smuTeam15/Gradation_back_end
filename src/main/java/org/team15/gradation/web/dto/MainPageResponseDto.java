package org.team15.gradation.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class MainPageResponseDto {

    private String userName;
    private String picture;
    private List<ChannelListResponseDto> channelList = new ArrayList<>();

    public void update(String userName, String picture, List<ChannelListResponseDto> channelList) {
        this.userName = userName;
        this.picture = picture;
        this.channelList = channelList;
    }
}
