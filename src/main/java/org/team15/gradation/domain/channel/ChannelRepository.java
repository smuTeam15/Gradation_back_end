package org.team15.gradation.domain.channel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChannelRepository extends JpaRepository<Channel, Long> {

    Channel findByCode(String code);

    @Query("update Channel set first_picture = :first_picture, second_picture = :second_picture where channel_id = :channel_id")
    void updatePictureUrl(@Param("channel_id") Long id, @Param("first_picture") String firstPicture, @Param("second_picture") String secondPicture);
}
