import { Injectable, isDevMode } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { initialValues, Ships } from "../models";

export const fake: GetAllShips = {
    getAll(): Observable<Ships> {
      return of(initialValues).pipe(delay(1500))
    }
  }

export interface GetAll<T> {
    getAll(): Observable<T>
}

const shipsFactory = () => isDevMode() ? fake : new GetAllShipsService()

export interface GetAllShips extends GetAll<Ships> {
}

@Injectable(
    {
        providedIn: 'root',
        //useFactory: shipsFactory
    }
)
export class GetAllShipsService implements GetAllShips {
    getAll(): Observable<Ships> {
        throw new Error('Not implemented exception hihi')
    }
}