import { Component } from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatListModule, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDivider,
    MatListModule,
    MatIcon
  ],
  templateUrl: './style.component.html',
  styleUrl: './style.component.scss'
})
export class StyleComponent {

}
