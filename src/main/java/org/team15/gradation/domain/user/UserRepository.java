package org.team15.gradation.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    //계정 로그인 시 saveOrUpdate에서 사용
    Optional<User> findByEmail(String email);
}
