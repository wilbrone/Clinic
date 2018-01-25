import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {MedicalHistoryService} from '../../../services/medical-history/medical-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-current-medications',
  templateUrl: './new-current-medications.component.html',
  styleUrls: ['./new-current-medications.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewCurrentMedicationsComponent implements OnInit {

  @Input() patient:any;

  constructor(public medicalHistoryService:MedicalHistoryService, public router:Router) { }

  otc_choices:any;
  choice_list:any = [];
  statuses:any;

  medication:Medication = new Medication();

  addMedication(){

  	this.medication.otc_choices = this.choice_list;
    this.medication.patient_id = this.patient.id;

    console.log(this.medication)

  	this.medicalHistoryService.addMedication(this.medication).subscribe(
      res => {
        this.medication= new Medication();
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

  onClickChoices(choice: any) {
    if(this.choice_list.indexOf(choice) < 0){
      this.choice_list.push(choice);
      console.log(this.choice_list);
    }else{
      this.choice_list.pop(choice);
      console.log(this.choice_list);
    }
  }

  ngOnInit() {

  	this.medicalHistoryService.getOTCChoices().subscribe(
      res => {
        this.otc_choices=res.json();
        // var quarter = Math.ceil(this.immunizations.length / 4);
        // this.choices_1=this.immunizations.splice(0, quarter);
        // this.choices_2=this.immunizations.splice(0, quarter);
        // this.choices_3=this.immunizations.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );

    this.medicalHistoryService.getStatuses().subscribe(
      res => {
        this.statuses=res.json();
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

export class Medication{
	institution_record_id:any;
	name:any;
	status:any;
	otc_choices:any;
	patient_id:any;
	nurses:any;
	doctors:any;
	dosage:any;
	reason_for_taking:any;
}
