import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./components/form/form.component";
import {ListComponent} from "./components/list/list.component";

const routes: Routes = [
  {path: '', component: FormComponent, pathMatch:'full'},
  {path: 'list', component: ListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
