import { UpdateTarefaComponent } from './core/components/tarefa/update-tarefa/update-tarefa.component';
import { DeleteLocalComponent } from './core/components/local/delete-local/delete-local.component';
import { UpdateLocalComponent } from './core/components/local/update-local/update-local.component';
import { DeleteConvidadoComponent } from './core/components/convidado/delete-convidado/delete-convidado.component';
import { UpdateConvidadoComponent } from './core/components/convidado/update-convidado/update-convidado.component';
import { CreateTarefaComponent } from './core/components/tarefa/create-tarefa/create-tarefa.component';
import { TarefaComponent } from './core/components/tarefa/tarefa.component';
import { CreateLocalComponent } from './core/components/local/create-local/create-local.component';
import { LocalComponent } from './core/components/local/local.component';
import { CreateConvidadoComponent } from './core/components/convidado/create-convidado/create-convidado.component';
import { ConvidadoComponent } from './core/components/convidado/convidado.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'convidado',
    component: ConvidadoComponent
  },
  {
    path: 'convidado/create',
    component: CreateConvidadoComponent
  },
  {
    path: "convidado/update/:id",
    component: UpdateConvidadoComponent
  },
  {
    path: "convidado/delete/:id",
    component: DeleteConvidadoComponent
  },
  {
    path: 'local',
    component: LocalComponent
  },
  {
    path: 'local/create',
    component: CreateLocalComponent
  },
  {
    path: "local/update/:id",
    component: UpdateLocalComponent
  },
  {
    path: "local/delete/:id",
    component: DeleteLocalComponent
  },
  {
    path: 'tarefa',
    component: TarefaComponent
  },
  {
    path: 'tarefa/create',
    component: CreateTarefaComponent
  },
  {
    path: "tarefa/update/:id",
    component: UpdateTarefaComponent
  },
  {
    path: "tarefa/delete/:id",
    component: DeleteLocalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
