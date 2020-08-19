package org.team15.gradation.domain.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post,Long> {

    Optional<Post> findByChannelId(Long channel_id);

//    @Query("select p from post p where p.channel_id = :channel_id")
//    List<Post> findByChannelId(@Param("channel_id") Long channelId);
}
