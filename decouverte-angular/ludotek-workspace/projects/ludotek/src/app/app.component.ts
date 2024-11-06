import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListFilmsComponent } from '../../features/films/components/list-films/list-films.component';
import { ObsVsPromiseComponent } from '../../learnings/obs-vs-promise/obs-vs-promise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListFilmsComponent, ObsVsPromiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // films: string[] = ['A new Hope', 'Empire strike back']
  title = 'Ma super ludoteck Star wars' 
  toggle = true
  private iterator = 0

  

  constructor() {
  //   this.title = 1
  //this.films.push(1)
  }

  toggleImage(): void {
    console.info('click')
    this.toggle = ! this.toggle
  }

  add(): void {
    //this.films.push(`star wars ${this.iterator}`)
    this.iterator ++
  }

  remove(): void {
    //this.films.pop()
  }

  get isEmpty() {
    console.info('isEmpty')
    return false;
    //return this.films.length == 0
  }
}
