package org.team15.gradation.domain.userhaschannels;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;

/*@Getter
@NoArgsConstructor
@Entity*/
public class UserHasChannels {

    /*@Id
    @ManyToOne
    @JoinColumn(name = "channel_id")
    private Channel channel;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public UserHasChannels(Channel channel, User user) {
        this.channel = channel;
        this.user = user;
    }*/
}
