package org.team15.gradation.service.weeklytopic;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.user.UserRepository;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;
import org.team15.gradation.domain.weeklytopic.WeeklyTopicRepository;
import org.team15.gradation.domain.weeklytopic.comment.WeeklyTopicComment;
import org.team15.gradation.domain.weeklytopic.comment.WeeklyTopicCommentRepository;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicCommentResponseDto;
import org.team15.gradation.web.dto.weeklytopic.WeeklyTopicCommentSaveRequestDto;

import javax.xml.ws.Response;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class WeeklyTopicCommentService {

    private final UserRepository userRepository;
    private final WeeklyTopicRepository weeklyTopicRepository;
    private final WeeklyTopicCommentRepository weeklyTopicCommentRepository;

    @Transactional
    public ResponseEntity save(Long weeklyTopicId, WeeklyTopicCommentSaveRequestDto requestDto, SessionUser user) {

        WeeklyTopic findWeeklyTopic = weeklyTopicRepository.findById(weeklyTopicId).orElse(null);

        if (findWeeklyTopic == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findWeeklyTopic.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        User currUser = userRepository.findById(user.getId()).get();
        WeeklyTopicComment weeklyTopicComment = requestDto.toEntity();
        weeklyTopicComment.createWeeklyTopicComment(findWeeklyTopic, currUser);

        weeklyTopicCommentRepository.save(weeklyTopicComment);

        return new ResponseEntity(HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity findWeeklyTopicComment(Long weeklyTopicId, SessionUser user) {

        WeeklyTopic findWeeklyTopic = weeklyTopicRepository.findById(weeklyTopicId).orElse(null);

        if (findWeeklyTopic == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        else if (!findWeeklyTopic.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        List<WeeklyTopicCommentResponseDto> weeklyTopicComments = findWeeklyTopic.getWeeklyTopicComments().stream()
                .map(WeeklyTopicCommentResponseDto::new)
                .collect(Collectors.toList());

        return new ResponseEntity(weeklyTopicComments, HttpStatus.OK);
    }

    public ResponseEntity delete(Long weeklyTopicCommentId, SessionUser user) {

        WeeklyTopicComment findWeeklyTopicComment = weeklyTopicCommentRepository.findById(weeklyTopicCommentId).orElse(null);

        if (findWeeklyTopicComment == null)
            return new ResponseEntity(HttpStatus.NO_CONTENT);

        WeeklyTopic findWeeklyTopic = findWeeklyTopicComment.getWeeklyTopic();

        if (!findWeeklyTopic.getChannel().isMember(user.getId()))
            return new ResponseEntity(HttpStatus.FORBIDDEN);

        weeklyTopicCommentRepository.delete(findWeeklyTopicComment);

        return new ResponseEntity(HttpStatus.OK);
    }
}
