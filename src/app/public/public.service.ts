import { ContactUs } from './../models/contact-us';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getContactUs() {
    return this.http.get<any>(`${this.apiUrl}/contactUs`);
  }

  addContactUs(contactUs : ContactUs) {
    return this.http.post(`${this.apiUrl}/contactUs`, contactUs)
  }
}
