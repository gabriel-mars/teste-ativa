import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/components/login/login.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from './core/components/template/sidebar/sidebar.component';
import { HeaderComponent } from './core/components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { ConvidadoComponent } from './core/components/convidado/convidado.component';
import { CreateConvidadoComponent } from './core/components/convidado/create-convidado/create-convidado.component';
import { UpdateConvidadoComponent } from './core/components/convidado/update-convidado/update-convidado.component';
import { DeleteConvidadoComponent } from './core/components/convidado/delete-convidado/delete-convidado.component';
import { LocalComponent } from './core/components/local/local.component';
import { CreateLocalComponent } from './core/components/local/create-local/create-local.component';
import { UpdateLocalComponent } from './core/components/local/update-local/update-local.component';
import { DeleteLocalComponent } from './core/components/local/delete-local/delete-local.component';
import { TarefaComponent } from './core/components/tarefa/tarefa.component';
import { CreateTarefaComponent } from './core/components/tarefa/create-tarefa/create-tarefa.component';
import { UpdateTarefaComponent } from './core/components/tarefa/update-tarefa/update-tarefa.component';
import { DeleteTarefaComponent } from './core/components/tarefa/delete-tarefa/delete-tarefa.component';
import { HomeComponent } from './core/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    ConvidadoComponent,
    CreateConvidadoComponent,
    UpdateConvidadoComponent,
    DeleteConvidadoComponent,
    LocalComponent,
    CreateLocalComponent,
    UpdateLocalComponent,
    DeleteLocalComponent,
    TarefaComponent,
    CreateTarefaComponent,
    UpdateTarefaComponent,
    DeleteTarefaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
