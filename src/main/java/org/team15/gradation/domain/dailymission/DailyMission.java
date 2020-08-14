package org.team15.gradation.domain.dailymission;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class DailyMission {

    @Id
    @Column(name = "daily_mission_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "channel_id")
    private Channel channel;

    @Builder
    public DailyMission(String content, Channel channel) {
        this.content = content;
        this.channel = channel;
    }
}
