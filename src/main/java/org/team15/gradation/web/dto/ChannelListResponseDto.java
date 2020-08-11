package org.team15.gradation.web.dto;

import lombok.Getter;
import org.team15.gradation.domain.channel.Channel;

@Getter
public class ChannelListResponseDto {
    private Long id;
    private String title;
    private String category;
    private String picture;

    public ChannelListResponseDto(Channel entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.category =entity.getCategory();
        this.picture = entity.getPicture();
    }
}
