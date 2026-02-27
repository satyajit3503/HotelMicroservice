# 🏨 Hotel Microservice Application

A robust, full-stack hotel management system built using a **Microservices Architecture**. This project allows users to manage hotel information, user profiles, and ratings seamlessly.

## 🚀 Key Features
- **Centralized Service Discovery**: All services are registered with a Service Registry (Eureka).
- **API Gateway**: Unified entry point for the frontend to communicate with various backend services.
- **User Management**: Comprehensive user profiles and rating tracking.
- **Hotel & Rating System**: Modular services to manage hotel data and customer feedback.
- **Responsive Frontend**: A modern UI built with Angular.

## 🛠️ Tech Stack

**Backend:**
- **Java & Spring Boot**: Core framework for services.
- **Spring Cloud**: Used for Service Discovery (Eureka) and API Gateway.
- **Maven**: Project management and build tool.

**Frontend:**
- **Angular**: Framework for building the user interface.
- **CSS3**: Custom styling for a clean look.

## 📂 Project Structure
The repository is divided into two main sections:
- **`/Backend`**: Contains individual microservices (UserService, HotelService, RatingService, ApiGateway, and ServiceRegistry).
- **`/Frontend`**: Contains the Angular source code.

## 🏃 How to Run Locally

1. **Backend Setup**:
   - Start the `ServiceRegistry` application first.
   - Run `Userservice`, `HotelService`, and `RatingService`.
   - Finally, start the `ApiGateway`.

2. **Frontend Setup**:
   - Navigate to `Frontend/hotel-frontend`.
   - Run `npm install` to install dependencies.
   - Run `npm start` or `ng serve` to launch the app.
   - Access the UI at `http://localhost:4200`.

---
*Created as part of a Microservices learning journey.*
