import { ToastService } from './../../../services/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LocalService } from './../../../services/local.service';
import { Local } from './../../../models/local.model';
import { Usuario } from './../../../models/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.css']
})
export class CreateLocalComponent implements OnInit {

  local: Local = {
    nome: ''
  };

  usuario!: Usuario;
  localForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private cookieService: CookieService,
    private router: Router,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.localForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get f() {
    return this.localForm.controls;
  }

  createLocal(): void {
    if (this.localForm.invalid) {
      return;
    }

    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.localService.create(this.local, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Local cadastrado!', true);
      this.router.navigate(['/local']);
    });
  }

  cancel(): void {
    this.router.navigate(['/local']);
  }
}
