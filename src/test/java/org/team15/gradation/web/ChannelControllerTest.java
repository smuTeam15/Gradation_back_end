package org.team15.gradation.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.team15.gradation.domain.channel.Channel;
import org.team15.gradation.domain.channel.ChannelRepository;
import org.team15.gradation.web.dto.ChannelSaveRequestDto;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ChannelControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ChannelRepository channelRepository;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setup(){
        mvc = MockMvcBuilders
                .webAppContextSetup(context)
                //.apply(springSecurity())
                .build();
    }

    @After
    public void teardown(){
        channelRepository.deleteAll();
    }

    @Test
    public void Channel_등록() throws Exception {
        String title = "_title";
        String category = "_category";
        String picture = "_picture";

        ChannelSaveRequestDto saveRequestDto = ChannelSaveRequestDto.builder()
                .title(title)
                .category(category)
                .picture(picture)
                .build();

        String url = "http://localhost:" + port + "/v1/channel/";

        mvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(new ObjectMapper()
                    .writeValueAsString(saveRequestDto)))
                .andExpect(status().isOk());

        List<Channel> all = channelRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getCategory()).isEqualTo(category);
        assertThat(all.get(0).getPicture()).isEqualTo(picture);


    }
}
