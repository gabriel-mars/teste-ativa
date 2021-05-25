import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './core/services/login.service';
import { Usuario } from './core/models/usuario.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste Ativa';

  user!: Usuario;
  mostrarComponente: boolean = false;
  mostrarLogin: boolean = true;

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('usuario');

    if(cookieExists) {
      this.user = JSON.parse(this.cookieService.get('usuario'));

      if (this.user != null) {
        this.mostrarComponente = true;
        this.mostrarLogin = false;
        this.loginService.login(this.user);
      }
    } else {
      this.loginService.mostrarComponentesEmitter.subscribe(
        (show) => (this.mostrarComponente = show)
      );

      this.loginService.mostrarLoginEmitter.subscribe(
        (show) => (this.mostrarLogin = show)
      );
    }
  }
}
