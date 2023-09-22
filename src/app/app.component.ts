import { Component, DoCheck } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'SwipeGenie';
  showNav = true;
  isAdmin = false;

  constructor(
    private router: Router
  ) {
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isAdmin=true;
    }
  }

  ngDoCheck() {
    let currentroute = this.router.url;
    if (currentroute == '/login' || currentroute == '/register') {
      this.showNav = false
    } else {
      this.showNav = true
    }
    let role=sessionStorage.getItem('role');
    if (role == 'admin') {
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }
}
