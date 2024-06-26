import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-glycemie-form',
  templateUrl: './glycemie-form.component.html',
  styleUrl: './glycemie-form.component.css'
})
export class GlycemieFormComponent implements OnInit{
  glycemieForm!:FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.glycemieForm=this.fb.group(
      {

      }
    )
  }

}
