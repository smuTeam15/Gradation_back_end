package org.team15.gradation.domain.post;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.post.likes.PostLikes;
import org.team15.gradation.domain.post.comment.PostComment;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.web.dto.PostUpdateRequestDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @OneToMany(mappedBy = "post")
    private List<PostComment> postComments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "channel_id")
    private Channel channel;

    @OneToMany(mappedBy = "post")
    private List<PostLikes> likes = new ArrayList<>();

    @Builder
    public Post(String content, User user, Channel channel) {
        this.content = content;
        this.user = user;
        this.channel = channel;
    }

    public void makePost(Channel channel, User user) {
        this.channel = channel;
        this.user = user;
        channel.getPosts().add(this);
    }

    public void update(PostUpdateRequestDto requestDto) {
        this.content = requestDto.getContent();
    }
}
