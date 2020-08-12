package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.*;
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
    public Long save(@RequestBody ChannelSaveRequestDto requestDto){
        SessionUser user = (SessionUser) httpSession.getAttribute("user");

        //만든 유저, 방 키값 넘겨주기
        return channelService.save(user.toUser(), requestDto);
    }

    @GetMapping("/api/v1/channel/")
    public List<ChannelListResponseDto> findById (){
        //세션에서 id 꺼내와서 서비스에 넘거줍시다.
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        final Long userId = user.getId();

        return channelService.findMyChannel(userId);
    }

    @PutMapping("/api/v1/channel/{channelId}")
    public Long update (@PathVariable Long channelId, @RequestBody ChannelSaveRequestDto requestDto){

        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        final Long userId = user.getId();
        //service에 channel_id를 넘겨주고 update
        return channelService.update(userId, channelId, requestDto);
    }

    @DeleteMapping("/api/v1/channel/{channel_id}")
    public Long delete(@PathVariable Long id){
        channelService.delete(id);
        return id;
    }

}
