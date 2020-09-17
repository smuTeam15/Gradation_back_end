package org.team15.gradation.domain.post.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.BaseTimeEntity;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class PostComment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_comment_id")
    private Long Id;

    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public PostComment(String comment) {
        this.comment = comment;
    }

    public void make(Post findPost, User findUser) {
        post = findPost;
        user = findUser;
        findPost.getPostComments().add(this);
    }
}
