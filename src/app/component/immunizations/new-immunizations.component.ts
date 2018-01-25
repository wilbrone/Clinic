import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {MedicalHistoryService} from '../../services/medical-history/medical-history.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-new-immunizations',
  templateUrl: './new-immunizations.component.html',
  styleUrls: ['./new-immunizations.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewImmunizationsComponent implements OnInit {

	@Input() patient:any;

	immunization:Immunization = new Immunization()

  constructor(public medicalHistoryService:MedicalHistoryService, 
              public router:Router) { }

	  ngOnInit() {
	  }


   addImmunization(){
   		this.immunization.patient_id= this.patient.id;
   		console.log(this.immunization)

	    this.medicalHistoryService.addImmunization(this.immunization).subscribe(
	      res => {
	        this.immunization = new Immunization();
	        console.log(res.text());
	      },
	      err => {
	        console.log(err.text());
	      }
	    );
    }

}

export class Immunization{
	patient_id:any;
	nurse_id:any;
	name:string;
	type:string;
	vaccine_status:string;
	vaccinator:string;
	date:string;
	lot_no:string;
	cvx_code:string;
	cvx_short_description:string;
	funding_source:string;
	note:string;
}
