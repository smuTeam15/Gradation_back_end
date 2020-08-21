package org.team15.gradation.web.dto.weeklytopic;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class WeeklyTopicResponseDto {
    private Long id;
    private String title;
    private String category;
    private String content;
    private List<WeeklyTopicCommentResponseDto> weeklyTopicComments = new ArrayList<>();

    public WeeklyTopicResponseDto(WeeklyTopic entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.category = entity.getCategory();
        this.content = entity.getContent();
        weeklyTopicComments = entity.getWeeklyTopicComments().stream()
                .map(WeeklyTopicCommentResponseDto::new)
                .collect(Collectors.toList());
    }
}
