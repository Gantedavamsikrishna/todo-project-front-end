import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskserviceService {
  private apiurl = 'http://localhost:2025';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<any> {
    return this.http.get(`${this.apiurl}/tasks`);
  }

  addtask(task: any): Observable<any> {
    return this.http.post(`${this.apiurl}/add`, task);
  }
  deletetask(id: any): Observable<any> {
    return this.http.delete(`${this.apiurl}/delete/${id}`);
  }
}
