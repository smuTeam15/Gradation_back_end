package org.team15.gradation.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
public class ChannelSaveRequestDto {

    private String firstSchool;
    private String secondSchool;
    private String description;
    private String category;
    private Long owner;

    public ChannelSaveRequestDto(String firstSchool, String secondSchool, String description, String category) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
    }

    public Channel toEntity(Long id, byte[] firstPicture, byte[] secondPicture){
        return Channel.builder()
                .firstSchool(firstSchool)
                .secondSchool(secondSchool)
                .description(description)
                .category(category)
                .firstPicture(firstPicture)
                .secondPicture(secondPicture)
                .owner(id)
                .build();
    }
}
