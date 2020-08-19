package org.team15.gradation.web.dto.channel;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;

@Getter
@NoArgsConstructor
public class ChannelSaveRequestDto {

    private String firstSchool;
    private String secondSchool;
    private String description;
    private String category;
    private Long owner;

    public ChannelSaveRequestDto(String firstSchool, String secondSchool, String description, String category, Long owner) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
        this.owner = owner;
    }

    public Channel toEntity(){
        return Channel.builder()
                .firstSchool(firstSchool)
                .secondSchool(secondSchool)
                .description(description)
                .category(category)
                .owner(owner)
                .build();
    }
}
