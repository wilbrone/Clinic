import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FamilyHistoryService} from '../../services/family-history/family-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-family-history',
  templateUrl: './new-family-history.component.html',
  styleUrls: ['./new-family-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewFamilyHistoryComponent implements OnInit {

  constructor(public familyHistoryService:FamilyHistoryService, public router:Router) { }

  choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];

  new_family_history:FamilyHistory = new FamilyHistory();

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


  addFamilyHistory() {
    this.new_family_history.conditions = this.choice_list;
    this.new_family_history.patient_id = this.patient.id;

    console.log(this.new_family_history)



    this.familyHistoryService.addFamilyHistory(this.new_family_history).subscribe(
      res => {
        this.new_family_history = new FamilyHistory();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    this.choice_list = [];

    
  }
  





  ngOnInit() {

  this.familyHistoryService.getFamilyHistoryChoices().subscribe(
      res => {
        this.choices=res.json();
        console.log(this.choices)
        
        var quarter = Math.ceil(this.choices.length / 4);
        this.choices_1=this.choices.splice(0, quarter);
        this.choices_2=this.choices.splice(0, quarter);
        this.choices_3=this.choices.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );

  


    
  	


  // var leftSide = this.family_factors.splice(0, half);
  // var rightSide = this.family_factors.splice(half, this.family_factors.length);
  // console.log(this.leftSide)
  
  }

}

export class FamilyHistory{
	public institution_record_id:string;
  public id: number;
  public patient_id: any;
  public conditions:any;
}
