package org.team15.gradation.web.dto.dailymission;

import lombok.Builder;
import lombok.Getter;
import org.team15.gradation.domain.dailymission.DailyMission;

@Getter
public class DailyMissionSaveRequestDto {
    private String content;

    @Builder
    public DailyMissionSaveRequestDto(String content) {
        this.content = content;
    }

    public DailyMission toEntity() {
        return DailyMission.builder()
                .content(content)
                .build();
    }
}
