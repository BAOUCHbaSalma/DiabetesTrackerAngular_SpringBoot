import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

import {DiabetiqueService} from "../services/diabetique.service";
import {Glycemie} from "../Models/diabetique.models";
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-glycemie-template',
  templateUrl: './glycemie-template.component.html',
  styleUrl: './glycemie-template.component.css'
})
export class GlycemieTemplateComponent implements OnInit{
  glycemies: Glycemie[] = [];
  chart: Chart | undefined;


  constructor(private diabetiqueService :DiabetiqueService) {
    Chart.register(...registerables);
}

  ngOnInit(): void {
    this.getGlycemie()
  }



  getGlycemie(){
    this.diabetiqueService.getAllGlycemie().subscribe(value => {
      this.glycemies=value
      this.chartJs()
  })}

  deleteGlycemie(id:number){
    this.diabetiqueService.deleteGlycemie(id).subscribe(()=>{
      this.getGlycemie();
      }
    )

    }
  chartJs(){
    const dateElements = this.glycemies.map(g => g.date);
    const valueElements = this.glycemies.map(g => g.valeurAfter);
    const ctx = (document.getElementById('chart-1') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(ctx, {

        type: 'line',
        data: {
          labels: dateElements,
          datasets: [{
            label: 'Valeurs de Glycémie',
            data: valueElements,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

}
