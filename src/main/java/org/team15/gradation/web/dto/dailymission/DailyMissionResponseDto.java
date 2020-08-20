package org.team15.gradation.web.dto.dailymission;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.dailymission.DailyMission;

@Getter
@NoArgsConstructor
public class DailyMissionResponseDto {
    private Long id;
    private String content;

    public DailyMissionResponseDto(DailyMission entity) {
        this.id = entity.getId();
        this.content = entity.getContent();
    }
}
