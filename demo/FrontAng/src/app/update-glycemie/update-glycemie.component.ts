import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DiabetiqueService} from "../services/diabetique.service";
import {FormBuilder} from "@angular/forms";
import {Glycemie} from "../Models/diabetique.models";

@Component({
  selector: 'app-update-glycemie',
  templateUrl: './update-glycemie.component.html',
  styleUrl: './update-glycemie.component.css'
})
export class UpdateGlycemieComponent implements OnInit{
  idGlycemie:any
  glycemieForm:any;

  constructor(private route:ActivatedRoute ,private fb:FormBuilder,private diabetiqueService:DiabetiqueService) {
  }

  ngOnInit(): void {
   this.idGlycemie = this.route.snapshot.paramMap.get('id')
    this.initForm()
    this.diabetiqueService.findGlycemie(this.idGlycemie).subscribe((res:any)=>
      this.glycemieForm.patchValue({
        valeurBefore: res.valeurBefore,
        valeurAfter: res.valeurAfter,
        date: res.date,
        heurs: res.heurs,
        diabetiquesId: res.diabetiques.idDiabetiques
      })

    )
  }
  initForm(): void {
    this.glycemieForm = this.fb.group({
      valeurBefore: [''],
      valeurAfter: [''],
      date: [''],
      heurs: [''],
      diabetiquesId: ['']
    });
  }

  updateGlycemie(){
    const inputData:Glycemie = {
      idGlycemie:this.idGlycemie,
      valeurBefore: this.glycemieForm.value.valeurBefore,
      valeurAfter: this.glycemieForm.value.valeurAfter,
      date: this.glycemieForm.value.date,
      heurs: this.glycemieForm.value.heurs,
      diabetiques: {
        idDiabetiques: this.glycemieForm.value.diabetiquesId,
        nameDiabetiques: '',
        poids: 0,
        taille: 0,
        genre: '',
        ageDiabetiques: 0,
        valuesGlycemies: []

      }
    }
    console.log(inputData)
    this.diabetiqueService.updateGlycemie(this.idGlycemie,inputData).subscribe()

    }





}
