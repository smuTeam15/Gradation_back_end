package org.team15.gradation.domain.post.likes;


import org.springframework.data.jpa.repository.JpaRepository;

public interface PostLikesRepository extends JpaRepository<PostLikes, Long> {

    PostLikes findByPostIdAndUserId(Long postId, Long userId);
}
