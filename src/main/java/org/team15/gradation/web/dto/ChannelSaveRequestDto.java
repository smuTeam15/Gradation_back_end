package org.team15.gradation.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;

@Getter
@NoArgsConstructor
public class ChannelSaveRequestDto {
    private String title;
    private String category;
    private String picture;

    @Builder
    public ChannelSaveRequestDto(String title, String category, String picture) {
        this.title = title;
        this.category = category;
        this.picture = picture;
    }

    public Channel toEntity() {
        return Channel.builder().title(title).category(category).picture(picture).build();
    }
}
