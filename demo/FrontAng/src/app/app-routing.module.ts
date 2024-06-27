import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlycemieTemplateComponent} from "./glycemie-template/glycemie-template.component";
import {GlycemieFormComponent} from "./glycemie-form/glycemie-form.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
