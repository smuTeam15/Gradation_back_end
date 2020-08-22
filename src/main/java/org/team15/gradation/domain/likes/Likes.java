package org.team15.gradation.domain.likes;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Likes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "likes_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Likes(Post post, User user) {
        this.post = post;
        this.user = user;
    }

    public void make(Post post, User user) {
        this.post = post;
        this.user = user;
        post.getLikes().add(this);
    }
}
