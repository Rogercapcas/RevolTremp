import {Component, Input, OnInit} from '@angular/core';
import {Edition} from '../../Models/edition';
import {ActivatedRoute, Router} from '@angular/router';
import {EditionsService} from '../../services/editions.service';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {
  editions: Edition[];
  selectedEdition: Edition;
  /*private activation: any;*/

  constructor( private editionsService: EditionsService) {
  }
  /*constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }*/

  ngOnInit(): void {
    this.getEditions();
    /*console.log(this.router.getCurrentNavigation().extras.state);
    this.activation.data.subscribe(editionx => {
      this.edition = editionx;
    });*/
  }

  getEditions(): void {
    this.editions = this.editionsService.getEditions();
  }

}
