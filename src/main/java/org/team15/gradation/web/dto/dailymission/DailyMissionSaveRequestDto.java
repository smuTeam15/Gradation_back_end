package org.team15.gradation.web.dto.dailymission;

import lombok.Getter;
import org.team15.gradation.domain.dailymission.DailyMission;

@Getter
public class DailyMissionSaveRequestDto {
    private String content;
    private Long channelId;

    public void setChannelId(Long channelId) {
        this.channelId = channelId;
    }

    public DailyMission toEntity() {
        return DailyMission.builder()
                .content(content)
                .build();
    }
}
