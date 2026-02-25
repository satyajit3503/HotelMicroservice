package com.microservice.Userservice.userRepositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.Userservice.entities.User;

public interface UserRepository extends JpaRepository<User,String>{

}
