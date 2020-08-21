package org.team15.gradation.web.dto.weeklytopic;

import org.team15.gradation.domain.weeklytopic.comment.WeeklyTopicComment;

public class WeeklyTopicCommentResponseDto {
    private String name;
    private Long commentId;
    private String comment;

    public WeeklyTopicCommentResponseDto(WeeklyTopicComment entity) {
        this.name = entity.getUser().getName();
        this.commentId = entity.getId();
        this.comment = entity.getComment();
    }
}
