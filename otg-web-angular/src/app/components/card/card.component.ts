import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
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
  img = input('');
}
