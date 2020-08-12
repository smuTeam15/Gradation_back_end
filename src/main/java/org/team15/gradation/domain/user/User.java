package org.team15.gradation.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String picture;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @ManyToMany
    @JoinTable(name = "USER_CHANNEL",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "channel_id"))
    private List<Channel> channels = new ArrayList<>();

    @Builder
    public User(Long id, String name, String email, String picture, Role role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.role = role;
    }

    public User update(String name, String picture){
        this.name = name;
        this.picture = picture;

        return this;
    }

    public void inrollChannel(Channel channel){
        channels.add(channel);
        channel.getUsers().add(this);
    }

    public String getRoleKey(){
        return this.role.getKey();
    }
}
