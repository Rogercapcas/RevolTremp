import {Component, Input, OnInit} from '@angular/core';
import {Edition} from '../../Models/edition';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {
  edition: Edition;
  /*private activation: any;*/

  constructor() {
  }
  /*constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }*/

  ngOnInit(): void {
    /*console.log(this.router.getCurrentNavigation().extras.state);
    this.activation.data.subscribe(editionx => {
      this.edition = editionx;
    });*/
  }

}
