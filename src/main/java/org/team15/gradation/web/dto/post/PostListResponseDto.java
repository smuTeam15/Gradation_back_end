package org.team15.gradation.web.dto.post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.like.Likes;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.User;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class PostListResponseDto {
    private Long id;
    private byte[] picture;
    private String content;
    private User user;
    private Channel channel;
    private List<Likes> likes = new ArrayList<>();

    public PostListResponseDto(Post entity) {
        this.id = entity.getId();
        this.picture = entity.getPicture();
        this.content = entity.getContent();
        this.user = entity.getUser();
        this.channel = entity.getChannel();
        this.likes = entity.getLikes();
    }

}
