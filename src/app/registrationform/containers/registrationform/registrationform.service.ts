import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../../models/register';



const Registration_API : string = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class RegistrationformService {

  constructor(private http: HttpClient) {}

  getDetails() : Observable<any> {
    return this.http.get<any>(Registration_API);
  }

  postDetails(details: Register) : Observable<Register> {
    return this.http.put<Register>(`${Registration_API}`, details);
  }
}
