import {inject, Injectable, signal} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  readonly sideNavOpen = signal<boolean>(false);
  readonly sideNavMode = signal<"over" | "push" | "side">('side');

  readonly layoutObserve = inject(BreakpointObserver)

  constructor() {

    this.layoutObserve.observe(Breakpoints.XSmall).subscribe(e => {
      console.log(e)
      if (e.matches) {
        this.sideNavMode.set('over')
      }else {
        this.sideNavMode.set('side')
      }
    })
  }
}
