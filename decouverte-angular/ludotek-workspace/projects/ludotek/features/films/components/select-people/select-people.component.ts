import { Component, OnInit, signal } from '@angular/core'
import { Characters } from '../../models/character'

@Component({
  selector: 'kline-select-people',
  standalone: true,
  imports: [],
  templateUrl: './select-people.component.html',
  styleUrl: './select-people.component.css'
})
export class SelectPeopleComponent implements OnInit {
 
  items = signal<Characters>([])

  ngOnInit(): void {
    this.items.set([{surname: 'Leia', id: 1}])
  }
}
