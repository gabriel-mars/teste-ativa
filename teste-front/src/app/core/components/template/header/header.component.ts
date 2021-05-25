import { CookieService } from 'ngx-cookie-service';
import { HeaderService } from './../../../services/header.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(
    private cd: ChangeDetectorRef,
    private headerService: HeaderService,
    private cookieService: CookieService

  ) { }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }

  logout(): void {
    this.cookieService.deleteAll();
    window.location.reload();
  }

}
