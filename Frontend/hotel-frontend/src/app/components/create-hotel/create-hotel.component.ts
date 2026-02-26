import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../services/user.service';

@Component({
    selector: 'app-create-hotel',
    templateUrl: './create-hotel.component.html',
    styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent {
    hotelForm: FormGroup;
    loading = false;
    error = '';
    success = false;

    constructor(
        private fb: FormBuilder,
        private hotelService: HotelService,
        private router: Router
    ) {
        this.hotelForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            location: ['', [Validators.required]],
            about: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit(): void {
        if (this.hotelForm.invalid) {
            return;
        }

        this.loading = true;
        this.error = '';

        // Note: The backend usually generates the ID if not provided, 
        // but looking at UserServiceImpl it was generating UUIDs.
        // Let's assume the Hotel Service also expects a 'null' or it handles it.
        // In many cases we might need to send a temporary one or let backend handle.
        const newHotel: Hotel = {
            id: '', // Backend should generate this if it follows the same pattern as User service
            ...this.hotelForm.value
        };

        this.hotelService.createHotel(newHotel).subscribe({
            next: (res) => {
                this.loading = false;
                this.success = true;
                setTimeout(() => this.router.navigate(['/']), 1500);
            },
            error: (err) => {
                this.loading = false;
                this.error = 'Failed to create hotel. Please check if the Hotel Service is running.';
                console.error(err);
            }
        });
    }

    goBack(): void {
        this.router.navigate(['/']);
    }
}
