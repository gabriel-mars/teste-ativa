import { LoginService } from './../../services/login.service';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarLogin: boolean = true;
  hide = true;
  resourcesLoaded = true;
  loginForm!: FormGroup;

  usuario: Usuario = {
    email: '',
  };

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    
    this.resourcesLoaded = false;
    localStorage.clear();

    this.loginService.readByEmail(this.usuario).subscribe((aux) => {
      const newUser: Usuario = aux;
      this.loginService.login(newUser);
      this.resourcesLoaded = true;
    });
  }

}
