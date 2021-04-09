import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OperationService {
  private apiUrl: String;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/';
  }

  public getASum(a: number, b: number): Observable<number> {
    return this.http.get<number>(this.apiUrl+'getASum?num1='+a+'&num2='+b);
  }

  public getAProduct(a:number): Observable<number> {
    return this.http.get<any>(this.apiUrl+'getAProduct?num='+a);
  }

  public getAPower(a:number): Observable<number> {
    return this.http.get<number>(this.apiUrl+'getAPower?num='+a);
  }
}