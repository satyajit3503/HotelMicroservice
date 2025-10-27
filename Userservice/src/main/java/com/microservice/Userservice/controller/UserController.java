package com.microservice.Userservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.microservice.Userservice.UserService.UserService;
import com.microservice.Userservice.entities.User;

@RestController
@RequestMapping("/users")
public class UserController {
    private Logger logger = LoggerFactory.getLogger(UserController.class);


    @Autowired
    private UserService userService;
    
	 @PostMapping
	    public ResponseEntity<User> createUser(@RequestBody User user) {
	        User user1 = userService.saveUser(user);
	        return ResponseEntity.status(HttpStatus.CREATED).body(user1);
	    }

	    //single user get


	    @GetMapping("/{userId}")
//	    @CircuitBreaker(name = "ratingHotelBreaker", fallbackMethod = "ratingHotelFallback")
//	    @Retry(name = "ratingHotelService", fallbackMethod = "ratingHotelFallback")
//	    @RateLimiter(name = "userRateLimiter", fallbackMethod = "ratingHotelFallback")
	    public ResponseEntity<User> getSingleUser(@PathVariable String userId) {
	    	logger.info("Get Single User Handler: UserController");

	        User user = userService.getUser(userId);
	        return ResponseEntity.ok(user);
	    }
	    
	    //all user get
	    @GetMapping
	    public ResponseEntity<List<User>> getAllUser() {
	        List<User> allUser = userService.getAllUser();
	        return ResponseEntity.ok(allUser);
	    }
	    
	    @GetMapping("/demo")
	    public String demo() {
	    	return "hello";
	    }
}

