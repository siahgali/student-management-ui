import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudents() {
    return this.http.get('/server/students', httpOptions)
  }

  createStudent(student:any) {
    let body = JSON.stringify(student);
    return this.http.post('/server/student', body, httpOptions);
  }

}
