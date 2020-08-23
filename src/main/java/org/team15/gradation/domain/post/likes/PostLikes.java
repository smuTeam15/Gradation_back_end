package org.team15.gradation.domain.post.likes;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class PostLikes {

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

    public void make(Post post, User user) {
        this.post = post;
        this.user = user;
        post.getLikes().add(this);
    }
}
