package org.team15.gradation.web.dto;

import org.team15.gradation.domain.dailymission.DailyMission;

public class DailyMissionSaveRequestDto {
    private Long id;
    private String content;

    public DailyMission toEntity() {
        return DailyMission.builder()
                .content(content)
                .build();
    }
}
