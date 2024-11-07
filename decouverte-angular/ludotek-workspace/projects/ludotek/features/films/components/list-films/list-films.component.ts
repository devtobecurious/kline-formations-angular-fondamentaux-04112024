import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TableFilmsComponent } from '../table-films/table-films.component';
import { FiltersFilmsComponent } from '../filters-films/filters-films.component';
import { Film, Films } from '../../models/film';
import { GetAllFilmsService } from '../../services/get-all-films.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'kline-list-films',
  standalone: true,
  imports: [TableFilmsComponent, FiltersFilmsComponent, AsyncPipe],
  //templateUrl: './list-films.component.html',
  template: `
   

    {{ subTitle() }}
    <kline-filters-films />
    @if(films$ | async; as films) {
      <kline-table-films (onDeleted)="deleteOne($event)" [items]="films" title="Liste des films" subTitle="A star wars story" />
    }

    @if(films$ | async; as films) {

    }
    <button (click)="goToNew()" >Nouveau</button>
  `,
  styleUrl: './list-films.component.css',
  // providers: [

  // ]
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  
  subTitle = signal<string>('')
  private readonly activeRoute = inject(ActivatedRoute)
  private readonly service = inject(GetAllFilmsService)
  private readonly router = inject(Router)
  private readonly containerDesSubAUndestroyed = new Subscription()

  films$ = this.service.getAll() // LAZY

  // films: Films = []//[{id: 1, title: 'A new hope', description: '', year: 1977}]

  ngOnInit(): void {
    const tot = this.activeRoute.snapshot.data['tot']
    this.subTitle.set(tot)

    // const sub = this.activeRoute.data.subscribe({
    //   next: data => console.info(data)
    // })

    // this.service.getAll().subscribe({
    //   next: (result) => this.films = result
    // })
    // const sub$ = this.films$.subscribe({
    //   next: (result) => this.films = result,
    //   complete: () => console.log('je reçois bien mes données')
    // })
    // this.containerDesSubAUndestroyed.add(sub$)
  }

  ngOnDestroy(): void {
    //this.containerDesSubAUndestroyed.unsubscribe()
  }

  goToNew(): void {
    this.router.navigate(['films/add'])
  }

  deleteOne(item: Film): void {
    //this.films = [...this.films.filter(film => item.id !== film.id)]
  }
}
