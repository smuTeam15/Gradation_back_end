package org.team15.gradation.web.dto.post.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.comment.PostComment;

@Getter
@NoArgsConstructor
public class PostCommentResponseDto {
    private Long commentId;
    private Long userId;
    private String userName;
    private String comment;

    public PostCommentResponseDto(PostComment entity) {
        this.commentId = entity.getId();
        this.userId = entity.getUser().getId();
        this.userName = entity.getUser().getName();
        this.comment = entity.getComment();
    }
}
