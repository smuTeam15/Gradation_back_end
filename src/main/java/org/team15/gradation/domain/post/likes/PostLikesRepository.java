package org.team15.gradation.domain.post.likes;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostLikesRepository extends JpaRepository<PostLikes, Long> {

    List<PostLikes> findByPostIdAndUserId(Long postId, Long userId);
}
