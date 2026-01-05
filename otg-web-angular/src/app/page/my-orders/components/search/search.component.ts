import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [NgbTypeahead, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true,
})
export class SearchComponent {
  // TODO: use a service get all the orders

  // filteredResult = [];

  allOrders: string[] = [];

  model: any;

  formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term === ''
          ? []
          : this.allOrders
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}
