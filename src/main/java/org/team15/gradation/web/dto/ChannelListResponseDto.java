package org.team15.gradation.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;

@Getter
@NoArgsConstructor
public class ChannelListResponseDto {

    private Long id;
    private String firstSchool;
    private String secondSchool;
    private String description;
    private String category;
    private String firstPicture;
    private String secondPicture;
    private Long Owner;

    public ChannelListResponseDto(Channel entity){
        this.id = entity.getId();
        this.firstSchool = entity.getFirstSchool();
        this.secondSchool = entity.getSecondSchool();
        this.description = entity.getDescription();
        this.category = entity.getDescription();
        this.firstPicture = entity.getFirstPicture();
        this.secondPicture = entity.getSecondPicture();
        this.Owner = entity.getOwner();
    }

    public void setOwner(Long owner) {
        Owner = owner;
    }
}
