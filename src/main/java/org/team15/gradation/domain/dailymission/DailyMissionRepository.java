package org.team15.gradation.domain.dailymission;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.team15.gradation.web.dto.DailyMissionSaveRequestDto;

public interface DailyMissionRepository extends JpaRepository<DailyMission, Long> {

    //@Query("INSERT INTO dailymission (content, channel_id) VALUES (saveContent, channelId)")
    //void saveDailyMission(@Param("saveContent") String content, @Param("saveChannelId") Long channelId);
}
