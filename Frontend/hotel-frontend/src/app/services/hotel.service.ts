import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class HotelService {

    // Using the ApiGateway address
    private readonly BASE_URL = 'http://localhost:8084/hotels';

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    /**
     * Create a new hotel
     * POST /hotels
     */
    createHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.post<Hotel>(`${this.BASE_URL}`, hotel, this.httpOptions);
    }

    /**
     * Get all hotels
     * GET /hotels
     */
    getAllHotels(): Observable<Hotel[]> {
        return this.http.get<Hotel[]>(`${this.BASE_URL}`);
    }

    /**
     * Get single hotel
     * GET /hotels/{hotelId}
     */
    getHotelById(hotelId: string): Observable<Hotel> {
        return this.http.get<Hotel>(`${this.BASE_URL}/${hotelId}`);
    }
}
