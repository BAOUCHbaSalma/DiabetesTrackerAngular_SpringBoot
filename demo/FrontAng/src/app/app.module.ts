import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlycemieTemplateComponent } from './glycemie-template/glycemie-template.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { GlycemieFormComponent } from './glycemie-form/glycemie-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateGlycemieComponent } from './update-glycemie/update-glycemie.component';

@NgModule({
  declarations: [
    AppComponent,
    GlycemieTemplateComponent,
    GlycemieFormComponent,
    UpdateGlycemieComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatTableModule,
        ReactiveFormsModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
