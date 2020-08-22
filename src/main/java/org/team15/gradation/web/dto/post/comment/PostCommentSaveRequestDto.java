package org.team15.gradation.web.dto.post.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.comment.PostComment;

@Getter
@NoArgsConstructor
public class PostCommentSaveRequestDto {
    private String comment;

    public PostComment toEntity() {
        return PostComment.builder()
                .comment(comment)
                .build();
    }
}
