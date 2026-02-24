package com.microservice.Userservice.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class userConfig {
	@Bean
    @LoadBalanced   // ⭐ THIS IS MISSING
	public RestTemplate restTemplate() {


        RestTemplate restTemplate = new RestTemplate();

        return restTemplate;
}
}
