import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import {SocialHistoryService} from '../../services/social-history/social-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-social-history',
  templateUrl: './new-social-history.component.html',
  styleUrls: ['./new-social-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewSocialHistoryComponent implements OnInit {

  constructor(public socialHistoryService:SocialHistoryService, public router:Router) { }

  choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];
  @Input() patient:any;



  new_social_history:SocialHistory = new SocialHistory();

  public choice_list: any = [];

  onClickChoices(choice: any) {
    if(this.choice_list.indexOf(choice) < 0){
      this.choice_list.push(choice);
      console.log(this.choice_list);
    }else{
      this.choice_list.pop(choice);
      console.log(this.choice_list);
    }
  }


  addSocialHistory() {
    this.new_social_history.social_history = this.choice_list;
    this.new_social_history.patient_id = this.patient.id;



    this.socialHistoryService.addSocialHistory(this.new_social_history).subscribe(
      res => {
        this.new_social_history = new SocialHistory();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    this.choice_list = [];

    
  }
  





  ngOnInit() {

  this.socialHistoryService.getSocialHistoryChoices().subscribe(
      res => {
        this.choices=res.json();

        console.log(res.json())
        var quarter = Math.ceil(this.choices.length / 4);
        this.choices_1=this.choices.splice(0, quarter);
        this.choices_2=this.choices.splice(0, quarter);
        this.choices_3=this.choices.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );

  // var leftSide = this.social_factors.splice(0, half);
  // var rightSide = this.social_factors.splice(half, this.social_factors.length);
  // console.log(this.leftSide)
  
  }

}

export class SocialHistory{
  public id: number;
  public social_history: any;
  public patient_id:string;
}