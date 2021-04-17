import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TheRxData';
  ngOnInit(): void {
    if(window.innerWidth < 1600){
      document.body.style.zoom = "67%";
    }
  }
}
