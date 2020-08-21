package org.team15.gradation.domain.weeklytopic.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class WeeklyTopicComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weekly_topic_comment_id")
    private Long id;

    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "weekly_topic_id")
    private WeeklyTopic weeklyTopic;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public WeeklyTopicComment(String comment) {
        this.comment = comment;
    }

    public void createWeeklyTopicComment(WeeklyTopic findWeeklyTopic, User currUser) {
        weeklyTopic = findWeeklyTopic;
        user = currUser;
        findWeeklyTopic.getWeeklyTopicComments().add(this);
    }
}
