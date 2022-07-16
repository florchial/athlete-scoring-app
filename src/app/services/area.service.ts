import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getAll(): Observable<string[]> {
    return new Observable(subscriber => {
      subscriber.next(['Area 1', "Area 2", "Area 3"])
    })
  }

}
