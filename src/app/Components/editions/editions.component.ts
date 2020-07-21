import {Component, Input, OnInit} from '@angular/core';
import {Edition} from '../../Models/edition';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {
  @Input() edition: Edition;

  constructor() { }

  ngOnInit(): void {
  }

}
