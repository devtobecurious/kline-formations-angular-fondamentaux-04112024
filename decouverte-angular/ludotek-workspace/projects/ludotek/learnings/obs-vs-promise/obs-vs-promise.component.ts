import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'kline-obs-vs-promise',
  standalone: true,
  imports: [],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent implements OnInit, OnDestroy {
  private readonly containerSubs$ = new Subscription();

  tick = ''
  // obs$ = new Observable<string>((observer) => { // LAZY
  //   console.info('0. OBSERVABLE') 

  //   setTimeout(() => {
  //     console.info('1. OBSERVABLE')
  //   }, 1500)

  //   observer.next('RETURN OBSERVABLE') 
  // })
  
  ngOnInit(): void {
    // console.time('promise')
    // console.info('ah que coucou')
    // console.timeEnd('promise')

    console.info('-----')
    console.info('ah que coucou') // SYNC

    const promise = new Promise<string>((resolve, reject) => { // EAGER
      console.info('0. PROMISE') // SYNC

      setTimeout(() => {
        console.info('1. PROMISE')
        resolve('RETURN PROMISE') // ASYNC
      }, 1500)
      
    }).then((value) => console.info(value)) 

    // const obs$ = new Observable((observer) => { // LAZY
    //   console.info('0. OBSERVABLE') 

    //   setTimeout(() => {
    //     console.info('1. OBSERVABLE')
    //   }, 1500)
    // })
    const obs$ = new Observable<string>((observer) => { // LAZY
      console.info('0. OBSERVABLE') 
  
      setTimeout(() => {
        console.info('1. OBSERVABLE')
      }, 1500)
  
      observer.next('RETURN OBSERVABLE') 
      observer.next('RETURN OBSERVABLE 1') 
      // observer.error(new Error('gniii'))
      
      // observer.complete()
      setInterval(() => {
        observer.next('RETURN OBSERVABLE ' + Math.random())
        console.info('tick ??')
      }, 1000);
    }).pipe(
      //tap(item => console.info('TAP', item)),
      map(item => item.toLowerCase()), // je m'abonne sur le next !! avant le next final !
      map(item => item.substring(25, 5)),
      // filter(item => item.startsWith('r'))
    )

    const sub$ = obs$.subscribe({
      next: (value) => this.tick = value,
      error: (error) => console.error(error),
      complete: () => console.info('COMPLETE')
    })
    this.containerSubs$.add(sub$)

   // sub$.unsubscribe()
    // obs$.subscribe()

    // setTimeout(() => {
    //   console.info('ah que coucou AA') // ASYNC
    // }, 0)

    console.info('******')
  }

  unePtiteFunction(): void {
    // console.info('unePtiteFunction ')
    // setTimeout(() => {
    // }, 0)
  }

  ngOnDestroy(): void {
    this.containerSubs$.unsubscribe()
  }
}
