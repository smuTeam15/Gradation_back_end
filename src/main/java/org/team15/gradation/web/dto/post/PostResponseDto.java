package org.team15.gradation.web.dto.post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.like.Likes;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.service.S3Service;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class PostResponseDto {
    private Long id;
    private String picture;
    private String content;
    private User user;
    private List<Likes> likes = new ArrayList<>();

    public PostResponseDto(Post entity) {
        this.id = entity.getId();
        this.picture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "Post_" + entity.getId().toString();
        this.content = entity.getContent();
        this.user = entity.getUser();
        this.likes = entity.getLikes();
    }

}
