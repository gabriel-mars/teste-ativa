import { LocalService } from './../../../services/local.service';
import { ConvidadoService } from './../../../services/convidado.service';
import { Convidado } from './../../../models/convidado.model';
import { Local } from './../../../models/local.model';
import { Usuario } from './../../../models/usuario.model';
import { Tarefa } from './../../../models/tarefa.model';
import { TarefaService } from './../../../services/tarefa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from './../../../services/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-tarefa',
  templateUrl: './update-tarefa.component.html',
  styleUrls: ['./update-tarefa.component.css']
})
export class UpdateTarefaComponent implements OnInit {

  tarefa: Tarefa;

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
    private route: ActivatedRoute,
    private convidadoService: ConvidadoService,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.tarefaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.tarefaService.readById(id, this.usuario.token).subscribe(tarefa => {
      this.tarefa = tarefa;
      this.tarefa.dataHoraAux = new Date(this.tarefa.dataHora)
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

  updateTarefa(): void {
    if (this.tarefaForm.invalid) {
      return;
    }
    
    this.tarefa.local = this.local;
    this.tarefa.dataHora = this.tarefa.dataHoraAux.toISOString()

    this.tarefaService.update(this.tarefa, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Tarefa atualizada!', true);
      this.router.navigate(['/tarefa']);
    });
  }

  cancel(): void {
    this.router.navigate(['/tarefa']);
  }
}
