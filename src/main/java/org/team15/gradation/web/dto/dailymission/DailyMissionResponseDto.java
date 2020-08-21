package org.team15.gradation.web.dto.dailymission;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.service.S3Service;

@Getter
@NoArgsConstructor
public class DailyMissionResponseDto {
    private Long id;
    private String picture;
    private String content;

    public DailyMissionResponseDto(DailyMission entity) {
        this.id = entity.getId();
        this.picture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "DailyMission_" + entity.getId().toString();
        this.content = entity.getContent();
    }
}
