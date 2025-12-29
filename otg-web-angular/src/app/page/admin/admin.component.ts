import { Component, input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  user = input.required<User>();
}
