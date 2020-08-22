package org.team15.gradation.web.dto.post.Likes;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.likes.Likes;

@Getter
@NoArgsConstructor
public class LikesResponseDto {
    private Long userId;

    public LikesResponseDto(Likes entity) {
        this.userId = entity.getUser().getId();
    }
}
