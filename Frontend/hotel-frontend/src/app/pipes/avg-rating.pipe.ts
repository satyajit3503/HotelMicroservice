import { Pipe, PipeTransform } from '@angular/core';
import { Rating } from '../services/user.service';

@Pipe({
    name: 'avgRating'
})
export class AvgRatingPipe implements PipeTransform {
    transform(ratings: Rating[]): number {
        if (!ratings || ratings.length === 0) return 0;
        const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
        return sum / ratings.length;
    }
}
