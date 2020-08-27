package org.team15.gradation.domain.channel;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.userhaschannel.UserHasChannel;
import org.team15.gradation.domain.weeklytopic.WeeklyTopic;
import org.team15.gradation.web.dto.channel.ChannelUpdateRequestDto;

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
    //@Convert(converter = StringCr)
    private Long id;

    @Column(name = "first_school", nullable = false)
    private String firstSchool;

    @Column(name = "second_school", nullable = false)
    private String secondSchool;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Long owner;

    @Column(nullable = false, length = 10)
    private String code;

    @OneToMany(mappedBy = "channel", fetch = FetchType.LAZY)
    private List<UserHasChannel> users = new ArrayList<>();

    @OneToMany(mappedBy = "channel", fetch = FetchType.LAZY)
    private List<DailyMission> dailyMissions = new ArrayList<>();

    @OneToMany(mappedBy = "channel", fetch = FetchType.LAZY)
    private List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "channel", fetch = FetchType.LAZY)
    private List<WeeklyTopic> weeklyTopics = new ArrayList<>();

    @Builder
    public Channel(String firstSchool, String secondSchool, String description, String category, Long owner) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
        this.owner = owner;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void update(ChannelUpdateRequestDto requestDto) {
        this.firstSchool = requestDto.getFirstSchool();
        this.secondSchool = requestDto.getSecondSchool();
        this.description = requestDto.getDescription();
        this.category = requestDto.getCategory();
    }

    public boolean isMember(Long userId) {

        for (UserHasChannel user : users) {
            if (user.getUser().getId().equals(userId))
                return true;
        }

        return false;
    }
}
