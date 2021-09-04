import { Component } from "@angular/core";
import {AuthServiceService} from "../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ["./header.component.scss"]
})

export class HeaderComponent {

  constructor(
    private authService:AuthServiceService,
    private router:Router) { }

  handleLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }



}
