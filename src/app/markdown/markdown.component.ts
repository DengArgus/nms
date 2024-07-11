import {afterNextRender, Component, ElementRef, viewChild} from '@angular/core';
import Vditor from "vditor";
import {MatCard, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})
export class MarkdownComponent {
  container = viewChild.required('markdown', {read: ElementRef})

  constructor() {

    afterNextRender(() => {

      const editor = new Vditor(this.container().nativeElement, {
        height: 360,
        toolbarConfig: {
          pin: true,
        },
        cache: {
          enable: false,
        },
        fullscreen: {
          index: 5
        }
      });


    });
  }

}

export default MarkdownComponent;
