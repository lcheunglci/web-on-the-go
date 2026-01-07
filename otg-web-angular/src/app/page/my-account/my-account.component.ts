import { User } from './../../models/user.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-my-account',
  imports: [],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {
  readonly user = input<User>();
}
