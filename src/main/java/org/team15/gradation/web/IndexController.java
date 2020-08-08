package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.team15.gradation.config.auth.dto.SessionUser;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final HttpSession httpSession;

    @GetMapping("/index")
    public String indexa(Model model){

        SessionUser user = (SessionUser) httpSession.getAttribute("user");

        if(user != null){
            model.addAttribute("userName", user.getName());
            model.addAttribute("userPicture", user.getPicture());
        }

        return "index.html";
    }

    @GetMapping("/home")
    public String index2(){
        return "asdf";
    }

    @GetMapping("/sta")
    public String staa(){
        return "main.html";
    }
}
