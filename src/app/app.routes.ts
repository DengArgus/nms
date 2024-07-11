import {Routes} from '@angular/router';
import {ForComponent} from "./for/for.component";
import {StyleComponent} from "./style/style.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'for', component: ForComponent},
  {path: 'style', component: StyleComponent},
  // {path: 'markdown', loadComponent: () => import('./markdown/markdown.component')},
];

