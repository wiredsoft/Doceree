import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mainHeading = 'TextTrack';
  constructor(public router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }
  profile(): void{
    this.router.navigate(['/theRxData/profile']);
  }
  payment(): void {
    this.router.navigate(['/theRxData/payment']);
  }
}
