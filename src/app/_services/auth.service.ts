import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    username= new BehaviorSubject<string | null>(this.cookieService.get('username'))
    constructor(
        private cookieService: CookieService
    ) { }

}