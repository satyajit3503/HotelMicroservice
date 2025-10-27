package com.microservice.Userservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class userConfig {
	@Bean
	public RestTemplate restTemplate() {


        RestTemplate restTemplate = new RestTemplate();

        return restTemplate;
}
}
