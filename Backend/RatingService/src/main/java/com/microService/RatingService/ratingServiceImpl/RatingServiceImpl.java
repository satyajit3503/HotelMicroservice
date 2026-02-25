package com.microService.RatingService.ratingServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microService.RatingService.ratingEntities.Rating;
import com.microService.RatingService.ratingRepositories.RatingRepository;
import com.microService.RatingService.ratingService.RatingService;

import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {


    @Autowired
    private RatingRepository repository;

    @Override
    public Rating create(Rating rating) {
        return repository.save(rating);
    }

    @Override
    public List<Rating> getRatings() {
        return repository.findAll();
    }

    @Override
    public List<Rating> getRatingByUserId(String userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public List<Rating> getRatingByHotelId(String hotelId) {
        return repository.findByHotelId(hotelId);
    }
}
