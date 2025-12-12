import { FormsModule } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected readonly authService = inject(AuthService);

  model = {
    userName: '',
    password: '',
  };

  login(user: string) {
    this.authService.login(user);
  }

  logout() {
    this.model.userName = '';
    this.authService.logout();
  }
}
