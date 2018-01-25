import { Component,
         OnInit, 
         ViewEncapsulation,
         ViewChild,
         Inject,
         Input,
         TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {VitalsService} from '../../services/vitals/vitals.service';
import {DiagnosesService} from '../../services/diagnoses/diagnoses.service';
import {MedicalHistoryService} from '../../services/medical-history/medical-history.service';
import {Http} from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssessmentsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  new_kidneys: boolean = false;
  kidneys: boolean = true;
  new_brain: boolean = false;
  brain: boolean = true;


  vitals:Vitals = new Vitals();
  pain_severities:any;

  new_hpi:HPI = new HPI();


  public choice_list: any = [];
  @Input() patient:any;

  vital_list:any;
  
  medication:Medication = new Medication()

  


  constructor(	public diagnosesService:DiagnosesService,
  				public medicalHistoryService:MedicalHistoryService, 
  				private _formBuilder: FormBuilder, 
              	public vitalsService:VitalsService, 
              	public router:Router) { }



  medications = [
        {name: "xyz_medicine",
         date: "12/7/12"
        },
        {name: "xyz_medicine",
         date: "12/7/12"
        },
        {name: "xyz_medicine",
         date: "12/7/12"
        }
  ]

  patient_info = {
    id:1,
    age: 23,
    code_status: "DNR"
  }

  addVitals(){

    this.vitals.patient_id = this.patient_info.id;

    console.log(this.vitals)

    this.vitalsService.addVitals(this.vitals).subscribe(
      res => {
        this.vitals = new Vitals();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );


   }

   addHPI(){

  		this.new_hpi.patient_id = this.patient_info.id;

    console.log(this.new_hpi)



    this.medicalHistoryService.addHPI(this.new_hpi).subscribe(
      res => {
        this.new_hpi = new HPI();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    this.choice_list = [];
  }

   

  

  ngOnInit() {
  	this.medicalHistoryService.getSeverityOfPain().subscribe(
      res => {
        this.pain_severities = res.json();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );


    // this.route.params.subscribe((params: Params) => {
    //   this.switch_physical_exam = params['name'];
    // });


    
  }

}

export class Vitals{
  patient_id:number;
  temperature:string;
  blood_pressure:string;
  heart_rate:string;
  respiratory_rate:string;
  oxygen:string;
  weight:string;
  height:string;
  bmi:string;
  institution_record_id:string;

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


export class Medication{

}
