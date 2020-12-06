import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Feedback } from 'src/model/feedback';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class FeedbackService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('/api/items')
  }

  addData(newEntry):Observable<any>{
    var head = new HttpHeaders()
    head.append('Content-Type','application/json');
    return this.http.post('/api/items',newEntry) 
  }

  deleteData(id):Observable<any>{
    return this.http.delete('/api/items'+id)
  }
}
