import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {DiagnosesService} from '../../../services/diagnoses/diagnoses.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-diagnoses',
  templateUrl: './new-diagnoses.component.html',
  styleUrls: ['./new-diagnoses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewDiagnosesComponent implements OnInit {

  constructor(public diagnosesService:DiagnosesService, public router:Router) { }

  choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];

  icd_codes:any;

  new_hpi:HPI = new HPI();
  new_diagnosis:Diagnosis = new Diagnosis();
  new_plan:Plan = new Plan();

  public choice_list: any = [];
  @Input() patient:any;

  onClickChoices(choice: any) {
    if(this.choice_list.indexOf(choice) < 0){
      this.choice_list.push(choice);
      console.log(this.choice_list);
    }else{
      this.choice_list.pop(choice);
      console.log(this.choice_list);
    }
  }

  addDiagnosis(){
  	this.new_diagnosis.patient_id = this.patient.id;

    console.log(this.new_plan)



    this.diagnosesService.addDiagnosis(this.new_diagnosis).subscribe(
      res => {
        this.new_diagnosis = new Diagnosis();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    this.choice_list = [];

  }

  

  addPlan(){
  	this.new_plan.patient_id = this.patient.id;

    console.log(this.new_plan)



    this.diagnosesService.addPlan(this.new_plan).subscribe(
      res => {
        this.new_plan = new Plan();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    this.choice_list = [];
  }

  ngOnInit() {

  	this.diagnosesService.getICD11Codes().subscribe(
      res => {
        this.icd_codes=res.json();
        console.log(this.icd_codes)
        // var quarter = Math.ceil(this.immunizations.length / 4);
        // this.choices_1=this.immunizations.splice(0, quarter);
        // this.choices_2=this.immunizations.splice(0, quarter);
        // this.choices_3=this.immunizations.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );
 }

}


export class Diagnosis{
	institution_record_id:string;
  assessment:string;
	icd_ids:any;
	patient_id:any;
	nurse_id:number;
}

export class HPI{
	institution_record_id:string;
	context:string;
	severity_of_pain:any;
	location_of_pain:string;
	onset_duration:string;
	associated_symptoms:string;
	current_therapy:string;
	patient_id:any;
	nurse_id:number;
}

export class Plan{
	institution_record_id:string;
	patient_id:any;
	nurse_id:number;
	name:string;
	previous_related_diagnosis:any;
	current_diagnosis:any;
	treatment:string;
	lab:string;
	worm_prescription:string;
	follow_up:string;
	external_referral:string;
}