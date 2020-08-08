package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.team15.gradation.service.channel.ChannelService;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

@RequiredArgsConstructor
@RestController
public class ChannelController {
    private final ChannelService channelService;

    @PostMapping("/v1/channel")
    public Long save(@RequestBody ChannelSaveRequestDto requestDto){
        return channelService.save(requestDto);
    }

//    @GetMapping
//    public void findById(){
//
//    }
}
