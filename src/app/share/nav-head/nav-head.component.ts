import {Component} from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {NgTemplateOutlet} from "@angular/common";
import {LayoutService} from "../layout.service";

@Component({
  selector: 'app-nav-head',
  standalone: true,
  imports: [
    LogoComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    NgTemplateOutlet
  ],
  templateUrl: './nav-head.component.html',
  styleUrl: './nav-head.component.scss'
})
export class NavHeadComponent {
  title = 'nms-app';

  constructor(public layoutService: LayoutService) {
  }

  sideNavToggle() {
    this.layoutService.sideNavOpen.update(value => !value)
  }

}
