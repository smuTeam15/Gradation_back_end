package org.team15.gradation.web.dto.dailymission;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DailyMissionUpdateRequestDto {
    private Long id;
    private String content;
}
