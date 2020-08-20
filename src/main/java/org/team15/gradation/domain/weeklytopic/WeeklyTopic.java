package org.team15.gradation.domain.weeklytopic;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.weeklytopic.comment.WeeklyTopicComment;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class WeeklyTopic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weekly_topic_id")
    private Long id;

    @Column
    private String title;

    @Column
    private String category;

    @Column
    private String content;

    @OneToMany(mappedBy = "weeklyTopic", fetch = FetchType.LAZY)
    private List<WeeklyTopicComment> weeklyTopicComments = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "channel_id")
    private Channel channel;

    @Builder
    public WeeklyTopic(String title, String category, String content) {
        this.title = title;
        this.category = category;
        this.content = content;
    }

    public void createWeeklyTopic(Channel channel) {
        this.channel = channel;
        channel.getWeeklyTopics().add(this);
    }
}
