import { map, catchError } from 'rxjs/operators';
import { Local } from './../models/local.model';
import { Observable, EMPTY } from 'rxjs';
import { ToastService } from './toast.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  baseUrl = "http://localhost:8080/api-ativa/local";
  params = new HttpParams();
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  read(token: string): Observable<Local[]> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.get<Local[]>(this.baseUrl, {headers: this.headers, params: this.params});
  }

  readById(id: number, token: string): Observable<Local> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Local>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(local: Local, token: string): Observable<Local> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.put<Local>(this.baseUrl, local, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number, token: string): Observable<Boolean> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Local>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Não foi possível completar a ação.', false);
    return EMPTY;
  }
}
