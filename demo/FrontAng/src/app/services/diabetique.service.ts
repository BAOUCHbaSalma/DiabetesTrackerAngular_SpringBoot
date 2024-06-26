import { Injectable } from '@angular/core';
import {Glycemie} from "../Models/diabetique.models";
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiabetiqueService {

  constructor(private http :HttpClient ) {}
  public getAllGlycemie():Observable<Array<Glycemie>>{
    return this.http.get<Array<Glycemie>>("http://localhost:8080/home")
  }
}
