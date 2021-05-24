import { Usuario } from './../../../models/usuario.model';
import { Tarefa } from './../../../models/tarefa.model';
import { TarefaService } from './../../../services/tarefa.service';
import { ToastService } from './../../../services/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-tarefa',
  templateUrl: './delete-tarefa.component.html',
  styleUrls: ['./delete-tarefa.component.css']
})
export class DeleteTarefaComponent implements OnInit {

  tarefa: Tarefa;
  usuario: Usuario;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.tarefaService.readById(id, this.usuario.token).subscribe(tarefa => {
      this.tarefa = tarefa;
    });
  }

  deleteTarefa(): void {
    this.tarefaService.delete(this.tarefa.id, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Tarefa removida!', true);
      this.router.navigate(['/tarefa']);
    });
  }

  cancel(): void{
    this.router.navigate(['/tarefa']);
  }
}
