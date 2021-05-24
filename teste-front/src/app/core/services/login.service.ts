import { ToastService } from './toast.service';
import { Usuario } from './../models/usuario.model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarComponentesEmitter = new EventEmitter<boolean>();
  mostrarLoginEmitter = new EventEmitter<boolean>();

  userLogged!: Usuario;

  baseUrl = "http://localhost:8080/api-ativa/user";
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastService: ToastService,
    private cookieService: CookieService
  ) { }

  readByEmail(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<Usuario>(url, usuario, {headers: this.headers}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  login(usr: Usuario): void {
    this.mostrarComponentesEmitter.emit(true);
    this.mostrarLoginEmitter.emit(false);

    this.cookieService.set('usuario', JSON.stringify(usr));
    this.toastService.showMessage('Autenticado!', true);
    this.router.navigate(['/home']);
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Dados incorretos!', false);
    return EMPTY;
  }
}
