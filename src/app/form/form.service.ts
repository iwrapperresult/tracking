import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formContentSource = new BehaviorSubject<string | null>(null);
  private apiUrl = 'http://localhost:3000/api';
  formContent$ = this.formContentSource.asObservable();

  setFormContent(content: string | null) {
    this.formContentSource.next(content);
  }

  createPackage(formData: any) {
    const url = `${this.apiUrl}/package/`;
    return new Observable<any>((observer) => {
      axios.post(url, { formData })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
    ;
  }

  createDelivery(formData: any) {
    const url = `${this.apiUrl}/delivery/`;
    return new Observable<any>((observer) => {
      axios.post(url, { formData })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
    ;
  }



}
