import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Edition} from '../../Models/edition';
import {EditionsComponent} from '../editions/editions.component';
import {EditionsService} from '../../services/editions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  editions: Edition[];
  selectedEdition: Edition;
  constructor( private router: Router, private editionsService: EditionsService) {
  }

  ngOnInit(): void {
    this.getEditions();
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

  onSelect(edition: Edition): void{
    this.selectedEdition = edition;
  }

  getEditions(): void{
    this.editions = this.editionsService.getEditions();
  }
}
