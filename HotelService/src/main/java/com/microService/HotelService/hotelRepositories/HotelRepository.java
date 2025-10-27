package com.microService.HotelService.hotelRepositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.microService.HotelService.hotelEntities.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, String> {
}