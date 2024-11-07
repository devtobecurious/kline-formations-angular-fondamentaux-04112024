import { Component, inject, signal } from '@angular/core';
import { GetAllShipsService } from '../../services/get-all-ships.service';
import { initialValues, Ships } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'kline-list-ships',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-ships.component.html',
  styleUrl: './list-ships.component.css'
})
export class ListShipsComponent {
  private readonly service = inject(GetAllShipsService)
  ships$ = this.service.getAll()
  // ships = signal<Ships>(initialValues)
}
