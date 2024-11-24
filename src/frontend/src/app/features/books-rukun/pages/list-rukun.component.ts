import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookRukunStore } from '../services/books-rukun.store';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: ` <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>
            <button
              class="btn btn-xs"
              [disabled]="store.sortingKey() === 'id'"
              (click)="store.setSortKey('id')"
            >
              Id
            </button>
          </th>
          <th>
            <button
              class="btn btn-xs"
              [disabled]="store.sortingKey() === 'title'"
              (click)="store.setSortKey('title')"
            >
              Title
            </button>
          </th>
          <th>
            <button
              class="btn btn-xs"
              [disabled]="store.sortingKey() === 'author'"
              (click)="store.setSortKey('author')"
            >
              Author
            </button>
          </th>
          <th>
            <button
              class="btn btn-xs"
              [disabled]="store.sortingKey() === 'year'"
              (click)="store.setSortKey('year')"
            >
              Year
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        @for (book of store.books(); track book.id) {
          <tr>
            <th>{{ book.id }}</th>
            <td>
              <a class="link" [routerLink]="['..', 'details-rukun', book.id]">{{
                book.title
              }}</a>
            </td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>`,
  styles: ``,
})
export class ListRukunComponent {
  store = inject(BookRukunStore);
}