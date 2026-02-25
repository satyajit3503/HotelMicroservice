package com.microService.RatingService.ratingEntities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Rating {

    @Id
    private String ratingId;

    private String userId;
    private String hotelId;
    private int rating; // e.g., 1-5 stars
    private String feedback;

    // getters and setters
}
