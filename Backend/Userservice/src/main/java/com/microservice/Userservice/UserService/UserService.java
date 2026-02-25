package com.microservice.Userservice.UserService;

import java.util.List;

import com.microservice.Userservice.entities.User;

public interface UserService {

    //user operations

    //create
    User saveUser(User user);


    User getUser(String userId);


	List<User> getAllUser();

}
