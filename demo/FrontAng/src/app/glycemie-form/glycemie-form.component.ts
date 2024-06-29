import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DiabetiqueService} from "../services/diabetique.service";
import {Glycemie} from "../Models/diabetique.models";

@Component({
  selector: 'app-glycemie-form',
  templateUrl: './glycemie-form.component.html',
  styleUrl: './glycemie-form.component.css'
})
export class GlycemieFormComponent implements OnInit{
  glycemieForm!:FormGroup;
  constructor(private fb: FormBuilder,private diabetiqueService :DiabetiqueService) {
  }
  ngOnInit(): void {
    this.glycemieForm = this.fb.group(
      {
        valeurBefore: this.fb.control(""),
        valeurAfter: this.fb.control(""),
        date: this.fb.control(""),
        heurs: this.fb.control(""),
        diabetiquesId: this.fb.control(""),

      })
  }

  saveGlycemie() {
    let formData:FormData=new FormData();
    formData.set('valeurBefore',this.glycemieForm.value.valeurBefore);
    formData.set('valeurAfter',this.glycemieForm.value.valeurAfter);
    formData.set('date',this.glycemieForm.value.date);
    formData.set('heurs',this.glycemieForm.value.heurs);
    formData.set('diabetiques.idDiabetiques',this.glycemieForm.value.diabetiquesId);
    this.diabetiqueService.saveGlycemie(formData).subscribe(
      {
        next:value =>
          alert('La valeur Glycemie est ajoutee avec succes')
      }

    )



  }
  hundelSubmit(): void {
    const formValues = this.glycemieForm.value;
    const glycemie: Glycemie = {
      idGlycemie: 0,
      valeurBefore: formValues.valeurBefore,
      valeurAfter: formValues.valeurAfter,
      date: formValues.date,
      heurs: formValues.heurs,
      diabetiques: {
        idDiabetiques: formValues.diabetiquesId,
        nameDiabetiques: '',
        poids: 0,
        taille: 0,
        genre: '',
        ageDiabetiques: 0,
        valuesGlycemies: []
      }
    };

    this.diabetiqueService.saveGlycemie(glycemie).subscribe(() => {
      this.ngOnInit();
    });}
}
