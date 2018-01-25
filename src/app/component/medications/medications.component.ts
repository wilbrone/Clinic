import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MedicationsComponent implements OnInit {

	newLab = false;
	listLab = true;

  constructor() { }

  ngOnInit() {
  }

  labSwitch(){
  	this.newLab = true;
  	this.listLab = false;
  }

  onSubmit(){
  	this.newLab = false;
  	this.listLab = true;

  }

  current_medications = [
    {name:'Lisinopril', dosage:'20mg', frequency:'Once daily'},
    {name:'Metformin', dosage:'500mg', frequency:'Once daily'},
    {name:'Novolin', dosage:'70/30', frequency:'5 units ac | 5 units hs'},
    {name:'Ergocalciferol', dosage:'50,000 IU', frequency:'4 caps. weekly'}
  ]

  current_labs = [
    {name:'Hematocrit', dosage:'20mg', frequency:'Once daily'},
    {name:'CBC W/DIFF & PLT CULTURE', dosage:'500mg', frequency:'Once daily'},
    {name:'LIPID PANEL COMP METABOLIC PANEL', dosage:'70/30', frequency:'5 units ac | 5 units hs'},
    {name:'Ergocalciferol', dosage:'50,000 IU', frequency:'4 caps. weekly'}
  ]

  current_x_rays = [
    {name:'Chest X-Ray', dosage:'20mg', frequency:'Once daily'}
    ]

}
