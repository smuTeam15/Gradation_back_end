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

    @GetMapping("/home")
    public MainPageResponseDto index(){
        //반환 dto 만들기
        SessionUser user = (SessionUser) httpSession.getAttribute("user");

        MainPageResponseDto responseDto = new MainPageResponseDto();

        if(user != null){
            System.out.println("============= in ==============");
            responseDto.builder()
                    .userName(user.getName())
                    .picture(user.getPicture())
                    .channelList(channelService.findMyChannel(user.getId()))
                    .build();
        }

        return responseDto;
    }

    /*
    * controller /asdf는 인식을 못함
    * */

//    @GetMapping("/loginSuccess")
//    public String index(Model model){
//
//        SessionUser user = (SessionUser) httpSession.getAttribute("user");
//
//        if(user != null){
//            model.addAttribute("userName", user.getName());
//            model.addAttribute("userPicture", user.getPicture());
//        }
//
//        return "/home";
//    }
}
