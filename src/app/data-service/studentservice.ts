import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/Model/Student'
import { ROOT_URL } from 'src/Model/Config'
import { Observable } from 'rxjs';

@Injectable()
export class studentservice 
{
  students: Observable<Student[]>;
  newstudent: Student;

  constructor(private http: HttpClient) {}

  GetStudent() 
  {
    return this.http.get<Student[]>(ROOT_URL + 'Students');
  }

  AddStudent(std: Student) 
  {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      FirstName: std.FirstName, LastName: std.LastName, Gender: std.Gender, Telephone: std.Telephone, 
      Email: std.Email, Address: std.Address, DOB: std.DOB
    }
    console.log(ROOT_URL);
    return this.http.post<Student>(ROOT_URL + 'Students/', body, { headers });
  }

  EditStudent(std: Student) {
    console.log(std);
    const params = new HttpParams().set('ID', std.Id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      FirstName: std.FirstName, LastName: std.LastName, Gender: std.Gender, Telephone: std.Telephone, 
      Email: std.Email, Address: std.Address, DOB: std.DOB, Id: std.Id
    }
    return this.http.put<Student>(ROOT_URL + 'Students/' + std.Id, body, { headers, params })
  }

  DeleteStudent(std: Student) {
    const params = new HttpParams().set('ID', std.Id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      FirstName: std.FirstName, LastName: std.LastName, Gender: std.Gender, Telephone: std.Telephone, 
      Email: std.Email, Address: std.Address, DOB: std.DOB, Id: std.Id
    }
    return this.http.delete<Student>(ROOT_URL + 'Students/' + std.Id)
  }
}