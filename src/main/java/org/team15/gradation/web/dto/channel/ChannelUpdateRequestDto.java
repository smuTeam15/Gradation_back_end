package org.team15.gradation.web.dto.channel;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChannelUpdateRequestDto {
    private String firstSchool;
    private String secondSchool;
    private String description;
    private String category;
    private byte[] firstPicture;
    private byte[] secondPicture;

    public ChannelUpdateRequestDto(String firstSchool, String secondSchool, String description, String category, byte[] firstPicture, byte[] secondPicture) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
        this.firstPicture = firstPicture;
        this.secondPicture = secondPicture;
    }
}
