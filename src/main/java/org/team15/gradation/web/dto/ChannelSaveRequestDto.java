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
    private String firstPicture;
    private String secondPicture;

    public Channel toEntity(Long id){
        return Channel.builder()
                .firstSchool(firstSchool)
                .secondSchool(secondSchool)
                .description(description)
                .category(category)
                .firstPicture(firstPicture)
                .secondPicture(secondPicture)
                .build();
    }
}
