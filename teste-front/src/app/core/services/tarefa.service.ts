import { map, catchError } from 'rxjs/operators';
import { Tarefa } from './../models/tarefa.model';
import { Observable, EMPTY } from 'rxjs';
import { ToastService } from './toast.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl = "http://localhost:8080/tarefa";
  params = new HttpParams();
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  create(tarefa: Tarefa, token: string): Observable<Tarefa> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.post<Tarefa>(this.baseUrl, tarefa, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(token: string): Observable<Tarefa[]> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.get<Tarefa[]>(this.baseUrl, {headers: this.headers, params: this.params});
  }

  readById(id: number, token: string): Observable<Tarefa> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarefa>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(tarefa: Tarefa, token: string): Observable<Tarefa> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    return this.http.put<Tarefa>(this.baseUrl, tarefa, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number, token: string): Observable<Boolean> {
    this.params = new HttpParams();
    this.params = this.params.set('token', token);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Tarefa>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('N??o foi poss??vel completar a a????o.', false);
    return EMPTY;
  }
}
