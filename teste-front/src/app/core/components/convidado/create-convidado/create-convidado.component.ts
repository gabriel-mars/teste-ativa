import { ToastService } from './../../../services/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ConvidadoService } from './../../../services/convidado.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../../models/usuario.model';
import { Convidado } from './../../../models/convidado.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-convidado',
  templateUrl: './create-convidado.component.html',
  styleUrls: ['./create-convidado.component.css']
})
export class CreateConvidadoComponent implements OnInit {

  convidado: Convidado = {
    nome: '',
    email: ''
  };

  usuario!: Usuario;
  convidadoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private cookieService: CookieService,
    private router: Router,
    private convidadoService: ConvidadoService
  ) { }

  ngOnInit(): void {
    this.convidadoForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get f() {
    return this.convidadoForm.controls;
  }

  createConvidado(): void {
    if (this.convidadoForm.invalid) {
      return;
    }

    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.convidadoService.create(this.convidado, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Convidado cadastrado!', true);
      this.router.navigate(['/convidado']);
    });
  }

  cancel(): void {
    this.router.navigate(['/convidado']);
  }
}
