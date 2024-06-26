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
  public glycemies:any;
  public dataSource:any;
  public displayedColumns=['idGlycemie','valeurBefore','valeurAfter','date','heurs','diabetiques'];

  constructor(private diabetiqueService :DiabetiqueService) {
}

  ngOnInit(): void {
    this.diabetiqueService.getAllGlycemie().subscribe({
      next:value => {
        this.glycemies=value
        this.dataSource=new MatTableDataSource(this.glycemies)
      }
    })

  }


}
