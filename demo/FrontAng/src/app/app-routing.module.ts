import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlycemieTemplateComponent} from "./glycemie-template/glycemie-template.component";
import {GlycemieFormComponent} from "./glycemie-form/glycemie-form.component";
import {UpdateGlycemieComponent} from "./update-glycemie/update-glycemie.component";

const routes: Routes = [
  {path:"home",component:GlycemieTemplateComponent},
  {path:"add",component:GlycemieFormComponent},
  {path:"Glycemie/:id/edit",component:UpdateGlycemieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
