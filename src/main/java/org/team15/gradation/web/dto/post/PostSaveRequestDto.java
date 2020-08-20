package org.team15.gradation.web.dto.post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.Post;

@Getter
@NoArgsConstructor
public class PostSaveRequestDto {

    private String content;
    private Long userId;
    private Long channelId;

    public PostSaveRequestDto(String content, Long userId, Long channelId) {
        this.content = content;
        this.userId = userId;
        this.channelId = channelId;
    }

    public Post toEntity() {
        return new Post().builder()
                .content(content)
                .build();
    }
}
