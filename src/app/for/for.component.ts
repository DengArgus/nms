import {afterNextRender, Component, ElementRef, signal, ViewChild, viewChild, viewChildren} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgTemplateOutlet} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [
    MatButton,MatCardModule,
    NgTemplateOutlet, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {
  // form=viewChild.required('form',
  //   {read:HTMLFormElement});
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor() {
    afterNextRender(() => {

    })
  }

  submit(e: any) {
    console.log(e.form);
    console.log(this.form)
  }


}
