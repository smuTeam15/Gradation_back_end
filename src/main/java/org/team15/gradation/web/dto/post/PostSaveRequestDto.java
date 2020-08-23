package org.team15.gradation.web.dto.post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.Post;

@Getter
@NoArgsConstructor
public class PostSaveRequestDto {

    private String content;

    public PostSaveRequestDto(String content) {
        this.content = content;
    }

    public Post toEntity() {
        return new Post().builder()
                .content(content)
                .build();
    }
}
