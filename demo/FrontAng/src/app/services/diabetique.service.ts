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
  public saveGlycemie(formData:any):Observable<Glycemie>{
    return this.http.post<Glycemie>("http://localhost:8080/Add",formData);
  }
 // public DeleteGlycemie(id:any){
 //   return this.http.delete("http://localhost:8080/Delete",id)
 // }
}
