package org.team15.gradation.domain.channel;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Channel {

    @Id
    @Column(name = "channel_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String picture;

    @ManyToMany(mappedBy = "channels")
    private List<User> users = new ArrayList<>();

    @OneToMany(mappedBy = "channel")
    private List<DailyMission> dailyMissions = new ArrayList<>();

    @Builder
    public Channel(String title, String category, String picture) {
        this.title = title;
        this.category = category;
        this.picture = picture;
    }

    public void update(String title, String category, String picture){
        this.title = title;
        this.category = category;
        this.picture = picture;
    }
}
