import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

import {DiabetiqueService} from "../services/diabetique.service";
import {Glycemie} from "../Models/diabetique.models";



@Component({
  selector: 'app-glycemie-template',
  templateUrl: './glycemie-template.component.html',
  styleUrl: './glycemie-template.component.css'
})
export class GlycemieTemplateComponent implements OnInit{
  glycemies: Glycemie[] = [];


  constructor(private diabetiqueService :DiabetiqueService) {
}

  ngOnInit(): void {
    this.getGlycemie()
  }


  getGlycemie(){
    this.diabetiqueService.getAllGlycemie().subscribe(value => {
      this.glycemies=value
  })}

  deleteGlycemie(id:number){
    this.diabetiqueService.deleteGlycemie(id).subscribe(()=>{
      this.getGlycemie();
      }
    )

    }


}
