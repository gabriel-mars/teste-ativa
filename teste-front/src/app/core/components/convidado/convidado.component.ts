import { Usuario } from './../../models/usuario.model';
import { CookieService } from 'ngx-cookie-service';
import { ConvidadoService } from './../../services/convidado.service';
import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { Convidado } from './../../models/convidado.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-convidado',
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.css']
})
export class ConvidadoComponent implements OnInit {

  usuario!: Usuario;
  convidados: Array<Convidado> = [];
  displayedColumns = ['nome', 'email', 'action'];
  dataSource!: MatTableDataSource<Convidado>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private cookieService: CookieService,
    private convidadoService: ConvidadoService
  ) {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    headerService.headerData = {
      title: 'Convidado',
      icon: 'people',
      routeUrl: '/convidado',
    }
  }

  ngOnInit(): void {
    this.convidadoService.read(this.usuario.token).subscribe(convidados => {
      this.dataSource = new MatTableDataSource(convidados);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToConvidadoCreate(): void {
    this.router.navigate(['/convidado/create']);
  }
}
