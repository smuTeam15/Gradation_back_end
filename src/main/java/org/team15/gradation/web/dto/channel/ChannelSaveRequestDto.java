package org.team15.gradation.web.dto.channel;

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
    private byte[] firstPicture;
    private byte[] secondPicture;
    private Long owner;

    public ChannelSaveRequestDto(String firstSchool, String secondSchool, String description, String category, byte[] firstPicture, byte[] secondPicture, Long owner) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
        this.firstPicture = firstPicture;
        this.secondPicture = secondPicture;
        this.owner = owner;
    }

    public Channel toEntity(){
        return Channel.builder()
                .firstSchool(firstSchool)
                .secondSchool(secondSchool)
                .description(description)
                .category(category)
                .firstPicture(firstPicture)
                .secondPicture(secondPicture)
                .owner(owner)
                .build();
    }
}
