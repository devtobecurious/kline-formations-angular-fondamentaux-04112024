import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ships } from "../models";

export interface GetAll<T> {
    getAll(): Observable<T>
}

export interface GetAllShips extends GetAll<Ships> {
}

@Injectable(
    {
        providedIn: 'root'
    }
)
export class GetAllShipsService implements GetAllShips {
    getAll(): Observable<Ships> {
        throw new Error('Not implemented exception hihi')
    }
}