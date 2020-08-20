package org.team15.gradation.web.dto.channel;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.service.S3Service;

@Getter
@NoArgsConstructor
public class ChannelResponseDto {

    private Long id;
    private String firstSchool;
    private String secondSchool;
    private String description;
    private String category;
    private String firstPicture;
    private String secondPicture;
    private Long owner;

    public ChannelResponseDto(Channel entity) {
        this.id = entity.getId();
        this.firstSchool = entity.getFirstSchool();
        this.secondSchool = entity.getSecondSchool();
        this.description = entity.getDescription();
        this.category = entity.getDescription();
        this.owner = entity.getOwner();
        this.firstPicture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "FirstPicture_" + entity.getId();
        this.secondPicture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "SecondPicture_" + entity.getId();
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }
}
