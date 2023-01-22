import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './components/redirect/redirect.component';
import { ReduceComponent } from './components/reduce/reduce.component';

const routes: Routes = [
  {
    path: 'home',
    component: ReduceComponent
  },
  {
    path: 'short/:id',
    component: RedirectComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
