package org.team15.gradation.domain.likes;


import org.springframework.data.jpa.repository.JpaRepository;

public interface LikesRepository extends JpaRepository<Likes, Long> {

    Likes findByUserId(Long userId);
}
