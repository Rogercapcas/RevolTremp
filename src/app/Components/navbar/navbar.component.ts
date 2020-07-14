import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) {
  }

  ngOnInit(): void {
/*
  public goTo(url) {
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log('Navigate successful!');
      } else {
        console.log('Navigate fail!');
      }
    });*/
  }
}
