package org.team15.gradation.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.domain.likes.LikesRepository;

@RequiredArgsConstructor
@Service
public class LikeService {

    private final LikesRepository likeRepoitory;

    //Like 테이블 매핑을 어케하지, 다대다 를 키로하는 테이블 만들면 답 없을 듯 합니다 낄낄
    @Transactional
    public void findById(){

    }
}
