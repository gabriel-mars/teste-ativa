import { CookieService } from 'ngx-cookie-service';
import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { TarefaService } from './../../services/tarefa.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tarefa } from './../../models/tarefa.model';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  usuario!: Usuario;
  tarefas: Array<Tarefa> = [];
  displayedColumns = ['nome', 'dataHora', 'local', 'action'];
  dataSource!: MatTableDataSource<Tarefa>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private cookieService: CookieService,
    private tarefaService: TarefaService
  ) {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    headerService.headerData = {
      title: 'Tarefa',
      icon: 'add_task',
      routeUrl: '/tarefa',
    }
  }

  ngOnInit(): void {
    this.tarefaService.read(this.usuario.token).subscribe(tarefas => {
      this.dataSource = new MatTableDataSource(tarefas);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToTarefaCreate(): void {
    this.router.navigate(['/tarefa/create']);
  }
}
