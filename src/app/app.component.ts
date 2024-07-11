import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule, MatNavList} from "@angular/material/list";
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {NgTemplateOutlet} from "@angular/common";
import {LogoComponent} from "./share/logo/logo.component";
import {MatInput, MatInputModule} from "@angular/material/input";
import {NavHeadComponent} from "./share/nav-head/nav-head.component";
import {LayoutService} from "./share/layout.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule,
    MatListModule, RouterLink,
    RouterLinkActive, MatCardModule, NgTemplateOutlet, LogoComponent, MatInputModule,

    NavHeadComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nms-app';
  constructor(public layoutService: LayoutService,) {
  }

  protected readonly console = console;
}
