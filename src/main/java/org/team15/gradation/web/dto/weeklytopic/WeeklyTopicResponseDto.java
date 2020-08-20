package org.team15.gradation.web.dto.weeklytopic;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;
import org.team15.gradation.domain.weeklytopic.comment.WeeklyTopicComment;

import java.util.List;

@Getter
@NoArgsConstructor
public class WeeklyTopicResponseDto {
    private Long id;
    private String title;
    private String category;
    private String content;
    //통째로 못가져가고 일부만 가져가야 한다.?
    //private List<WeeklyTopicComment> weeklyTopicComments = new Arraylist<>();

    public WeeklyTopicResponseDto(WeeklyTopic entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.category = entity.getCategory();
        this.content = entity.getContent();
    }
}
