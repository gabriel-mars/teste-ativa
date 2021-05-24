import { map, catchError } from 'rxjs/operators';
import { ToastService } from './toast.service';
import { Convidado } from './../models/convidado.model';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {

  baseUrl = "http://localhost:8080/convidado";
  params = new HttpParams();
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  create(convidado: Convidado, token: string): Observable<Convidado> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.post<Convidado>(this.baseUrl, convidado, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(token: string): Observable<Convidado[]> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.get<Convidado[]>(this.baseUrl, {headers: this.headers, params: this.params});
  }

  readById(id: number, token: string): Observable<Convidado> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Convidado>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(convidado: Convidado, token: string): Observable<Convidado> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.put<Convidado>(this.baseUrl, convidado, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number, token: string): Observable<Boolean> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Convidado>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Não foi possível completar a ação.', false);
    return EMPTY;
  }
}
