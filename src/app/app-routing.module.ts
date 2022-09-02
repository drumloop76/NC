import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'form', component:FormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
