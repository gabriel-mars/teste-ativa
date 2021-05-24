import { LocalService } from './../../../services/local.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from './../../../services/toast.service';
import { Usuario } from './../../../models/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Local } from './../../../models/local.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-local',
  templateUrl: './update-local.component.html',
  styleUrls: ['./update-local.component.css']
})
export class UpdateLocalComponent implements OnInit {

  local: Local = {
    nome: ''
  };

  usuario!: Usuario;
  localForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private cookieService: CookieService,
    private router: Router,
    private localService: LocalService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.localForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.localService.readById(id, this.usuario.token).subscribe(local => {
      this.local = local;
    });
  }

  get f() {
    return this.localForm.controls;
  }

  updateLocal(): void {
    if (this.localForm.invalid) {
      return;
    }

    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    this.localService.update(this.local, this.usuario.token).subscribe(() => {
      this.toastService.showMessage('Local atualizado!', true);
      this.router.navigate(['/local']);
    });
  }

  cancel(): void {
    this.router.navigate(['/local']);
  }
}
