package org.team15.gradation.web.dto.weeklytopic;

import lombok.Getter;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;

@Getter
public class WeeklyTopicSaveRequestDto {
    private String title;
    private String category;
    private String content;
    private Long channelId;

    public WeeklyTopic toEntity() {
        return WeeklyTopic.builder()
                .title(title)
                .category(category)
                .content(content)
                .build();

    }
}
