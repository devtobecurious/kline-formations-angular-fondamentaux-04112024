import { Component } from '@angular/core';
import { TableFilmsComponent } from '../table-films/table-films.component';
import { FiltersFilmsComponent } from '../filters-films/filters-films.component';
import { Film, Films } from '../../models/film';

@Component({
  selector: 'kline-list-films',
  standalone: true,
  imports: [TableFilmsComponent, FiltersFilmsComponent],
  //templateUrl: './list-films.component.html',
  template: `
    <kline-filters-films />
    <kline-table-films (onDeleted)="deleteOne($event)" [items]="films" title="Liste des films" subTitle="A star wars story" />
  `,
  styleUrl: './list-films.component.css'
})
export class ListFilmsComponent {
  films: Films = [{id: 1, title: 'A new hope', description: '', year: 1977}]

  deleteOne(item: Film): void {
    this.films = [...this.films.filter(film => item.id !== film.id)]
  }
}
