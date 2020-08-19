package org.team15.gradation.web.dto.post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.domain.user.User;

@Getter
@NoArgsConstructor
public class PostSaveRequestDto {

    private byte[] picture;
    private String content;
    private Long userId;
    private Long channelId;

    public PostSaveRequestDto(byte[] picture, String content, Long userId, Long channelId) {
        this.picture = picture;
        this.content = content;
        this.userId = userId;
        this.channelId = channelId;
    }

    public Post toEntity(Channel channel, User user) {
        return new Post().builder()
                .picture(picture)
                .content(content)
                .user(user)
                .channel(channel)
                .build();
    }
}
