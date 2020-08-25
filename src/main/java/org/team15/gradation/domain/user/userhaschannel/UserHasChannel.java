package org.team15.gradation.domain.user.userhaschannel;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class UserHasChannel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "channel_id")
    private Channel channel;

    public void makeUserHasChannel(User findUser, Channel saveChannel) {
        this.user = findUser;
        this.channel = saveChannel;
        findUser.getChannels().add(this);
        saveChannel.getUsers().add(this);
    }
}
