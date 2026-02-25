package com.microService.HotelService.hotelService;

import java.util.List;

import com.microService.HotelService.hotelEntities.Hotel;

public interface HotelService {

    //create

    Hotel create(Hotel hotel);

    //get all
    List<Hotel> getAll();

    //get single
    Hotel get(String id);

}
