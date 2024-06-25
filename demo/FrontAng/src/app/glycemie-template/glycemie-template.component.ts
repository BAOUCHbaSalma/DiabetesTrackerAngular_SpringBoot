import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-glycemie-template',
  templateUrl: './glycemie-template.component.html',
  styleUrl: './glycemie-template.component.css'
})
export class GlycemieTemplateComponent implements OnInit{

  public glycemie:any;
  public dataSource:any;
  public displayedColumns=['idGlycemie','valeurBefore','valeurAfter','date','heurs','diabetiques'];

  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/home")
      .subscribe({
        next:data => {

          this.glycemie=data
          this.dataSource=new MatTableDataSource(this.glycemie)

        },
        error :err => {
          console.log(err);
        }

      })
  }

}
