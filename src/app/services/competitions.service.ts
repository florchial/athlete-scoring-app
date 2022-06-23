import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {AgeRange} from "../models/age-range.model";
import {Style} from "../models/style.model";

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  constructor() {
  }

  getAll(): Observable<Competition[]> {
    return new Observable(subscriber => {
      subscriber.next([
        new Competition("1", "Puño", new AgeRange("1", "Infantil"), Style.TRADITIONAL),
        new Competition("2", "Puño", new AgeRange("2", "Juvenil"), Style.MODERN),
        new Competition("3", "Arma Corta", new AgeRange("2", "Juvenil"), Style.TRADITIONAL),
        new Competition("4", "Arma Larga", new AgeRange("2", "Juvenil"), Style.MODERN),
        new Competition("5", "Arma Corta", new AgeRange("3", "Adulto I"), Style.TRADITIONAL),
        new Competition("6", "Arma Larga", new AgeRange("4", "Adulto II"), Style.MODERN),
        new Competition("7", "Taichi", new AgeRange("3", "Adulto I"), Style.MODERN),
        new Competition("8", "Forma grupal", new AgeRange("2", "Juvenil"), Style.TRADITIONAL),
        new Competition("8", "Doble arma", new AgeRange("5", "Mayores"), Style.MODERN)
      ]);
    })
  }
}
