package org.team15.gradation.web.dto.channel;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.user.userhaschannel.UserHasChannel;
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
    private String code;

    public ChannelResponseDto(UserHasChannel entity) {
        this.id = entity.getChannel().getId();
        this.firstSchool = entity.getChannel().getFirstSchool();
        this.secondSchool = entity.getChannel().getSecondSchool();
        this.description = entity.getChannel().getDescription();
        this.category = entity.getChannel().getCategory();
        this.owner = entity.getChannel().getOwner();
        this.firstPicture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "FirstPicture_" + entity.getId();
        this.secondPicture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "SecondPicture_" + entity.getId();
        this.code = entity.getChannel().getCode();
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }
}
