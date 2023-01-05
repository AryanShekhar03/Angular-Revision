import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpClient) { 
}
employee(data: any) {
  
  return this.httpservice.post('http://localhost:3000/employees',data)
}
employeeget() {
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     
    })
  }
  return this.httpservice.get('http://localhost:3000/employees',header)
}
}


