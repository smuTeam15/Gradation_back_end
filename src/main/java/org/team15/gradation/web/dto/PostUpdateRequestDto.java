package org.team15.gradation.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostUpdateRequestDto {
    private String content;

    public PostUpdateRequestDto(String content) {
        this.content = content;
    }
}
