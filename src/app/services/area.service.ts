import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

export interface Area {
  id: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() {
  }

  getAll(): Observable<Area[]> {
    return new Observable(subscriber => {
      subscriber.next([{id: 'Area 1', name: "Área 1"}, {id: "Area 2", name: "Área 2"}, {id: "Area 3", name: "Área 3"}])
    })
  }


}
