package org.team15.gradation.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChannelUpdateRequestDto {
    private String firstSchool;
    private String secondSchool;
    private String description;
    private String category;
    private String firstPicture;
    private String secondPicture;
}
