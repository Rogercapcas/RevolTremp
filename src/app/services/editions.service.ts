import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Edition} from '../Models/edition';
import {EDITIONS} from '../data-sets/editions-set';

@Injectable({
  providedIn: 'root'
})
export class EditionsService {

  constructor(private http: HttpClient) { }
  getEditions(): Edition[]{
    return EDITIONS;
  }
}
