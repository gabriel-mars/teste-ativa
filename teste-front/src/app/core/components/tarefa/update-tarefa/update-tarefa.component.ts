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

  tarefa: Tarefa = {
    nome: '',
    dataHora: null,
    duracao: null
  };

  usuario!: Usuario;
  tarefaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private cookieService: CookieService,
    private router: Router,
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tarefaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.tarefaService.readById(id, this.usuario.token).subscribe(tarefa => {
      this.tarefa = tarefa;
    });
  }

  get f() {
    return this.tarefaForm.controls;
  }

  updateTarefa(): void {
    if (this.tarefaForm.invalid) {
      return;
    }

    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.tarefaService.update(this.tarefa, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Tarefa atualizada!', true);
      this.router.navigate(['/tarefa']);
    });
  }

  cancel(): void {
    this.router.navigate(['/tarefa']);
  }
}
