import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Local } from './../../models/local.model';
import { Usuario } from './../../models/usuario.model';
import { CookieService } from 'ngx-cookie-service';
import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { LocalService } from './../../services/local.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  usuario!: Usuario;
  locais: Array<Local> = [];
  displayedColumns = ['nome', 'action'];
  dataSource!: MatTableDataSource<Local>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private cookieService: CookieService,
    private localService: LocalService
  ) {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
    headerService.headerData = {
      title: 'Local',
      icon: 'place',
      routeUrl: '/local',
    }
  }

  ngOnInit(): void {
    this.localService.read(this.usuario.token).subscribe(locais => {
      this.dataSource = new MatTableDataSource(locais);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToLocalCreate(): void {
    this.router.navigate(['/local/create']);
  }
}
