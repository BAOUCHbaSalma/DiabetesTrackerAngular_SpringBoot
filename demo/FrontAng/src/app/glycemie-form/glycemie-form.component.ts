import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DiabetiqueService} from "../services/diabetique.service";

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
}
