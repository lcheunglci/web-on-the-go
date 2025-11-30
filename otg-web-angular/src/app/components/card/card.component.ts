import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  header = input('');
  footer = input('');
  title = input('');
  subtitle = input('');
  message = input('');
  link = input('');
  linkText = input('');
  img = input('');
}
