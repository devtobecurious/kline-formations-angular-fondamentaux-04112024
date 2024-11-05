import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Film, Films } from '../../models/film';

@Component({
  selector: 'kline-table-films',
  standalone: true,
  imports: [],
  templateUrl: './table-films.component.html',
  styleUrl: './table-films.component.css'
})
export class TableFilmsComponent {
  title = input<string>('Titre non setté')
  @Input() subTitle = ''
  // items = input<string[]>()
  items = input.required<Films>()
  //@Input() items: string[] = [];

  onDeleted = output<Film>()
  //@Output() onDeleted = new EventEmitter<Film>()

  deleteOneItem(item: Film): void {
    this.onDeleted.emit(item)
    // this.onDeleted.emit(item)
  }
}
