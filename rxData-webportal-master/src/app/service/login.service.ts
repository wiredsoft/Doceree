import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  chatShow = false;
  chatShowBS = new BehaviorSubject<boolean>(false);
  headerShow = '';
  headerShowwBS = new BehaviorSubject<string>('');
  constructor() {
    this.chatShowBS.next(this.chatShow);
    this.headerShowwBS.next(this.headerShow);
  }
}
