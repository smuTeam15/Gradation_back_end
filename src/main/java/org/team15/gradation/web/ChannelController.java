package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.*;
import org.team15.gradation.service.channel.ChannelService;
import org.team15.gradation.web.dto.ChannelListResponseDto;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ChannelController {
    private final ChannelService channelService;

    @PostMapping("/api/v1/channel")
    public Long save(@RequestBody ChannelSaveRequestDto requestDto){
        return channelService.save(requestDto);
    }

    @GetMapping("/api/v1/channel/{id}")
    public List<ChannelListResponseDto> findById (@PathVariable Long id){
        return channelService.findMyChannel(id);
    }

    @PutMapping("/api/v1/channel/{id}")
    public Long update (@PathVariable Long id, @RequestBody ChannelSaveRequestDto requestDto){
        return channelService.update(id, requestDto);
    }

    @DeleteMapping("/api/v1/channel/{id}")
    public Long delete(@PathVariable Long id){
        channelService.delete(id);
        return id;
    }

}
