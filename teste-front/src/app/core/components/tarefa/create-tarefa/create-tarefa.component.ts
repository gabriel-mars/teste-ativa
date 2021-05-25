import { Tarefa } from './../../../models/tarefa.model';
import { LocalService } from './../../../services/local.service';
import { ConvidadoService } from './../../../services/convidado.service';
import { Usuario } from './../../../models/usuario.model';
import { TarefaService } from './../../../services/tarefa.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from './../../../services/toast.service';
import { Local } from './../../../models/local.model';
import { Convidado } from './../../../models/convidado.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-tarefa',
  templateUrl: './create-tarefa.component.html',
  styleUrls: ['./create-tarefa.component.css']
})
export class CreateTarefaComponent implements OnInit {

  tarefa: Tarefa = {
    nome: '',
    dataHoraAux: new Date
  };

  local: Local = {
    nome: ''
  };

  convidadosList: Array<Convidado> = [];
  locaisList: Array<Local> = [];

  usuario!: Usuario;
  tarefaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private cookieService: CookieService,
    private router: Router,
    private tarefaService: TarefaService,
    private convidadoService: ConvidadoService,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.tarefaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    this.convidadoService.read(this.usuario.token).subscribe(convidados => {
      this.convidadosList = convidados;
    });

    this.localService.read(this.usuario.token).subscribe(locais => {
      this.locaisList = locais;
    });
  }

  get f() {
    return this.tarefaForm.controls;
  }

  createTarefa(): void {
    if (this.tarefaForm.invalid) {
      return;
    }

    this.tarefa.local = this.local;
    this.tarefa.dataHora = this.tarefa.dataHoraAux.toISOString()

    this.tarefaService.create(this.tarefa, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Tarefa cadastrada!', true);
      this.router.navigate(['/tarefa']);
    });
  }

  cancel(): void {
    this.router.navigate(['/tarefa']);
  }
}
