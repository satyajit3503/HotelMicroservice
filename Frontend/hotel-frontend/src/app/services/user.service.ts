import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rating {
  ratingId: string;
  userId: string;
  hotelId: string;
  rating: number;
  feedback: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
  about: string;
  ratings?: Rating[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Base URL - pointing to the UserService (adjust port if using ApiGateway)
  private readonly BASE_URL = 'http://localhost:8084/users';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * Create a new user
   * POST /users
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}`, user, this.httpOptions);
  }

  /**
   * Get a single user by userId
   * GET /users/{userId}
   */
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${userId}`);
  }

  /**
   * Get all users
   * GET /users/all
   */
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/all`);
  }

  /**
   * Demo endpoint
   * GET /users/demo
   */
  demo(): Observable<string> {
    return this.http.get<string>(`${this.BASE_URL}/demo`);
  }
}
