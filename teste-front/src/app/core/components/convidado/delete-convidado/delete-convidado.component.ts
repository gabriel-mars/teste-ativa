import { Convidado } from './../../../models/convidado.model';
import { Usuario } from './../../../models/usuario.model';
import { ToastService } from './../../../services/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvidadoService } from './../../../services/convidado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-convidado',
  templateUrl: './delete-convidado.component.html',
  styleUrls: ['./delete-convidado.component.css']
})
export class DeleteConvidadoComponent implements OnInit {

  convidado: Convidado;
  usuario: Usuario;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private convidadoService: ConvidadoService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.convidadoService.readById(id, this.usuario.token).subscribe(convidado => {
      this.convidado = convidado;
    });
  }

  deleteConvidado(): void {
    this.convidadoService.delete(this.convidado.id, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Convidado removido!', true);
      this.router.navigate(['/convidado']);
    });
  }

  cancel(): void{
    this.router.navigate(['/convidado']);
  }
}
