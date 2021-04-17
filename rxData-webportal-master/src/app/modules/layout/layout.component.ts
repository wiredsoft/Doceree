import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public messageList:Array<any>= [
    "1. Message Message Message Message Message",
    "2. Message Message Message Message Message",
    "3. Message Message Message Message Message",
    "4. Message Message Message Message Message",
    "5. Message Message Message Message Message",
    "6. Message Message Message Message Message",
    "7. Message Message Message Message Message",
    "8. Message Message Message Message Message",
    "9. Message Message Message Message Message",
    "10. Message Message Message Message Message",
    "11. Message Message Message Message Message",
    "12. Message Message Message Message Message",
    "13. Message Message Message Message Message",
  ]
  constructor(public loginService: LoginService) { }

  closeChat() {
    let obj = document.getElementById("myForm");
    if (obj) {
      obj.style.display = "none";
    }
  }
  showChat() {
    let obj = document.getElementById("myForm");
    if (obj) {
      obj.style.display = "block";
    }
  }
}
