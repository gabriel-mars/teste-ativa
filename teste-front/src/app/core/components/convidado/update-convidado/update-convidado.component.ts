import { CookieService } from 'ngx-cookie-service';
import { Convidado } from './../../../models/convidado.model';
import { Usuario } from './../../../models/usuario.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvidadoService } from './../../../services/convidado.service';
import { ToastService } from './../../../services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-convidado',
  templateUrl: './update-convidado.component.html',
  styleUrls: ['./update-convidado.component.css']
})
export class UpdateConvidadoComponent implements OnInit {

  convidado: Convidado = {
    nome: '',
    email: ''
  };

  usuario!: Usuario;
  convidadoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private convidadoService: ConvidadoService,
    private router: Router, 
    private cookieService: CookieService,
    private route: ActivatedRoute,
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

    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.convidadoService.readById(id, this.usuario.token).subscribe(convidado => {
      this.convidado = convidado;
    });
  }

  get f() {
    return this.convidadoForm.controls;
  }

  updateConvidado(): void {
    if (this.convidadoForm.invalid) {
      return;
    }

    this.convidadoService.update(this.convidado, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Convidado atualizado!', true);
      this.router.navigate(['/convidado']);
    });
  }

  cancel(): void {
    this.router.navigate(['/convidado']);
  }
}
