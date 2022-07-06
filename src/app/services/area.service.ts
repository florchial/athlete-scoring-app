import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";

const baseUrl = 'http://192.168.0.239:8080/api/competitions';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<string[]> {
    return new Observable(subscriber => {
      this.http.get<Competition[]>(baseUrl).subscribe(
        data => {
          subscriber.next(Array.from(new Set(data.map(c => c.area))));
        })
    })
  }

}
