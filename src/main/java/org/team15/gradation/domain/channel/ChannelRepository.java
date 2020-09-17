package org.team15.gradation.domain.channel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChannelRepository extends JpaRepository<Channel, Long> {

    Channel findByCode(String code);

    @Modifying
    @Query("update Channel c set c.firstPicture = :first_picture, c.secondPicture = :second_picture where c.id = :channel_id")
    void updatePictureUrl(@Param("channel_id") Long id, @Param("first_picture") String firstPicture, @Param("second_picture") String secondPicture);
}
