package org.team15.gradation.web.dto.weeklytopic;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.weeklytopic.comment.WeeklyTopicComment;

@Getter
@NoArgsConstructor
public class WeeklyTopicCommentSaveRequestDto {
    private String comment;

    public WeeklyTopicComment toEntity() {
        return WeeklyTopicComment.builder()
                .comment(comment)
                .build();
    }
}
