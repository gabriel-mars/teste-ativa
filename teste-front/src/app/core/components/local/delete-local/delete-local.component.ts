import { CookieService } from 'ngx-cookie-service';
import { LocalService } from './../../../services/local.service';
import { Local } from './../../../models/local.model';
import { Usuario } from './../../../models/usuario.model';
import { ToastService } from './../../../services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-local',
  templateUrl: './delete-local.component.html',
  styleUrls: ['./delete-local.component.css']
})
export class DeleteLocalComponent implements OnInit {

  local: Local;
  usuario: Usuario;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.localService.readById(id, this.usuario.token).subscribe(local => {
      this.local = local;
    });
  }

  deleteLocal(): void {
    this.localService.delete(this.local.id, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Local removido!', true);
      this.router.navigate(['/local']);
    });
  }

  cancel(): void{
    this.router.navigate(['/local']);
  }
}
