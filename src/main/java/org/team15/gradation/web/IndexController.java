package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.channel.ChannelService;
import org.team15.gradation.web.dto.MainPageResponseDto;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class IndexController {

    private final HttpSession httpSession;
    private final ChannelService channelService;

    @GetMapping("/v1/login")
    public MainPageResponseDto login(){
        //반환 dto 만들기
        SessionUser user = (SessionUser) httpSession.getAttribute("user");

        MainPageResponseDto responseDto = new MainPageResponseDto();

        if(user != null){
            responseDto.update(user.getName(), user.getPicture(), channelService.findMyChannel(user.getId()));
        }

        return responseDto;
    }
}
