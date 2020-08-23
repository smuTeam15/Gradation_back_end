package org.team15.gradation.web.dto.post.Likes;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.likes.PostLikes;

@Getter
@NoArgsConstructor
public class PostLikesResponseDto {
    private Long userId;

    public PostLikesResponseDto(PostLikes entity) {
        this.userId = entity.getUser().getId();
    }
}
