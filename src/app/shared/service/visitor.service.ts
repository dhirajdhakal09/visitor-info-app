import { Injectable } from '@angular/core';
import { Visitor } from '../model/visitor.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient,) { 
    
  }

  getVisitors() : Observable<Visitor[]>{
    return this.http.get<Visitor[]>(environment.mainUrl + "getall")
  }

  getCheckedInVisitor(): Observable<Visitor>{
    return this.http.get<Visitor>(environment.mainUrl + "getcheckedin")
  }

  saveVisitors(requestParameter: any, id: number) {
   // alert(id);
    if (id >0) {
      return this.http.put(`${environment.mainUrl}update`, requestParameter)//.subscribe((data)=>{}, error=>{console.log(error)});;
    } else {
      alert(`${environment.mainUrl }create`);
      //requestParameter = { "checkoutTime": "2015-05-16T05:50:06", "checkinTime": "2015-05-16T05:50:06", "phone": "3423244", "address": "safsdfasf", "name": "asdfafs" }
      return this.http.post(`${environment.mainUrl }create`, requestParameter);
    }
  }
}
