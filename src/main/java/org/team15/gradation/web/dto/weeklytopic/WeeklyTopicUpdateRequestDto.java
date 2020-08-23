package org.team15.gradation.web.dto.weeklytopic;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;

@Getter
@NoArgsConstructor
public class WeeklyTopicUpdateRequestDto {
    private String title;
    private String category;
    private String content;

    public WeeklyTopic toEntity() {
        return WeeklyTopic.builder()
                .title(title)
                .category(category)
                .content(content)
                .build();
    }
}
