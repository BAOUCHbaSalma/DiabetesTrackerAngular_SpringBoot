import { Injectable } from '@angular/core';
import {Glycemie} from "../Models/diabetique.models";
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiabetiqueService {

  urlApi="http://localhost:8080";

  constructor(private http :HttpClient ) {}
  public getAllGlycemie():Observable<Array<Glycemie>>{
    return this.http.get<Array<Glycemie>>("http://localhost:8080/home")
  }
  public saveGlycemie(formData:any):Observable<Glycemie>{
    return this.http.post<Glycemie>("http://localhost:8080/Add",formData);
  }
public deleteGlycemie(id:number){
    return this.http.delete(`${this.urlApi}/Delete/${id}`)
}
public updateGlycemie(id:number,glycemie:Glycemie){
    return this.http.put(`${this.urlApi}/update/${id}`,glycemie)
}
public findGlycemie(id:number){
    return this.http.get(`${this.urlApi}/Find/${id}`)
}
}
