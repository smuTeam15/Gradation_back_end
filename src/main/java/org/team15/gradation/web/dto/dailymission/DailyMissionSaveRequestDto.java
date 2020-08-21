package org.team15.gradation.web.dto.dailymission;

import lombok.Builder;
import lombok.Getter;
import org.team15.gradation.domain.dailymission.DailyMission;

@Getter
public class DailyMissionSaveRequestDto {
    private String content;
    private Long channelId;

    @Builder
    public DailyMissionSaveRequestDto(String content, Long channelId) {
        this.content = content;
        this.channelId = channelId;
    }

    public void setChannelId(Long channelId) {
        this.channelId = channelId;
    }

    public DailyMission toEntity() {
        return DailyMission.builder()
                .content(content)
                .build();
    }
}
