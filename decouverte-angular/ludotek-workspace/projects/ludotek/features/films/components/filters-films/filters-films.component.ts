import { Component } from '@angular/core';
import { SelectPeopleComponent } from '../select-people/select-people.component';

@Component({
  selector: 'kline-filters-films',
  standalone: true,
  imports: [SelectPeopleComponent],
  templateUrl: './filters-films.component.html',
  styleUrl: './filters-films.component.css'
})
export class FiltersFilmsComponent {

}
