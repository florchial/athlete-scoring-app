import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  constructor() { }

  getAll(): Observable<Competition> {
    return new Observable(subscriber => {
      subscriber.next(new Competition("1", "Puño", new Category("1", "Infantil")));
      subscriber.next(new Competition("2", "Puño", new Category("2", "Juvenil")));
      subscriber.next(new Competition("3", "Arma Corta", new Category("2", "Juvenil")));
      subscriber.next(new Competition("4", "Arma Larga", new Category("2", "Juvenil")));
      subscriber.next(new Competition("5", "Arma Corta", new Category("3", "Adulto I")));
      subscriber.next(new Competition("6", "Arma Larga", new Category("4", "Adulto II")));
      subscriber.next(new Competition("7", "Taiji", new Category("3", "Adulto I")));
      subscriber.next(new Competition("8", "Forma grupal", new Category("2", "Juvenil")));
    })
  }
}
