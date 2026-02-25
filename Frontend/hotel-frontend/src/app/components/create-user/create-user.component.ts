import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm: FormGroup;
  loading = false;
  success = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      about: ['', [Validators.maxLength(300)]]
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const newUser: User = {
      userId: uuidv4(),
      name: this.userForm.value.name.trim(),
      email: this.userForm.value.email.trim(),
      about: this.userForm.value.about?.trim() || ''
    };

    this.userService.createUser(newUser).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        setTimeout(() => this.router.navigate(['/']), 1800);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to create user. Please try again.';
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  get name() { return this.userForm.get('name')!; }
  get email() { return this.userForm.get('email')!; }
  get about() { return this.userForm.get('about')!; }
}
