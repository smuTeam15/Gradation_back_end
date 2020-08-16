package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.domain.user.User;
import org.team15.gradation.service.channel.ChannelService;
import org.team15.gradation.web.dto.ChannelListResponseDto;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

import javax.servlet.http.HttpSession;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ChannelController {
    private final HttpSession httpSession;
    private final ChannelService channelService;

    @PostMapping("/api/v1/channel")
    public Long save(@RequestParam("firstPicture") MultipartFile firstPicture,
                     @RequestParam("secondPicture") MultipartFile secondPicture,
                     @RequestParam("description") String description,
                     @RequestParam("category") String category,
                     @RequestParam("firstSchool") String firstSchool,
                     @RequestParam("secondSchool") String secondSchool,
                     @LoginUser SessionUser user) {

        ChannelSaveRequestDto requestDto = new ChannelSaveRequestDto(firstSchool, secondSchool, description, category);

        return channelService.save(requestDto, firstPicture, secondPicture, user);
    }

    @GetMapping("/api/v1/channel/")
    public List<ChannelListResponseDto> findById() {
        //세션에서 id 꺼내와서 서비스에 넘거줍시다.
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        final Long userId = user.getId();

        return channelService.findMyChannel(userId);
    }

    @PutMapping("/api/v1/channel/{channelId}")
    public Long update(@PathVariable Long channelId, @RequestBody ChannelSaveRequestDto requestDto) {

        SessionUser user = (SessionUser) httpSession.getAttribute("user");

        return channelService.update(user.getId(), channelId, requestDto);
    }

    @DeleteMapping("/api/v1/channel/{channel_id}")
    public Long delete(@PathVariable Long id) {
        channelService.delete(id);
        return id;
    }

}
