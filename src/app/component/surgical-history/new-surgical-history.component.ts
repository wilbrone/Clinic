import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import {DiagnosesService} from '../../services/diagnoses/diagnoses.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
@Component({
  selector: 'app-new-surgical-history',
  templateUrl: './new-surgical-history.component.html',
  styleUrls: ['./new-surgical-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewSurgicalHistoryComponent implements OnInit {

	@Input() patient:any;

	surg_conditions:any;

	surg_histories:any;
	public choice_list: any = [];

	choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];

	surg_history:SurgHistory = new SurgHistory();

  constructor(
              public diagnosesService:DiagnosesService, 
              public router:Router) { }



  onClickChoices(choice: any) {
    if(this.choice_list.indexOf(choice) < 0){
      this.choice_list.push(choice);
      console.log(this.choice_list);
    }else{
      this.choice_list.pop(choice);
      console.log(this.choice_list);
    }
  }

  addSurgHistory(){

    this.surg_history.patient_id = this.patient.id;
    this.surg_history.conditions = this.choice_list;

    console.log(this.surg_history)

    this.diagnosesService.addSurgHistory(this.surg_history).subscribe(
      res => {
        this.surg_history = new SurgHistory();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );


   }

  ngOnInit() {

  	this.diagnosesService.getConditions().subscribe(
      res => {
        this.surg_conditions=res.json();
        console.log(this.surg_conditions)
        var quarter = Math.ceil(this.surg_conditions.length / 4);
        this.choices_1=this.surg_conditions.splice(0, quarter);
        this.choices_2=this.surg_conditions.splice(0, quarter);
        this.choices_3=this.surg_conditions.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}


export class SurgHistory{
  
  public id: number;
  public patient_id: any;
  public conditions:any;
}