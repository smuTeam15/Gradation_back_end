package org.team15.gradation.web.dto.post.Likes;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.likes.PostLikes;

@Getter
@NoArgsConstructor
public class PostLikesResponseDto {
    private Long id;
    private Long userId;

    public PostLikesResponseDto(PostLikes entity) {
        this.id = entity.getId();
        this.userId = entity.getUser().getId();
    }
}
