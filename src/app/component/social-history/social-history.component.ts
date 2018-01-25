import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import {SocialHistoryService} from '../../services/social-history/social-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-social-history',
  templateUrl: './social-history.component.html',
  styleUrls: ['./social-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialHistoryComponent implements OnInit {

  constructor(public socialHistoryService:SocialHistoryService, public router:Router) { }

  choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];

  @Input() patient:any;

  

  social_history = [
  				{
	  				name:'Boots',
	  				date:'01/02/2018'

  				},
  				{
	  				name:'Boots',
	  				date:'01/02/2018'

  				},
  				{
	  				name:'Boots',
	  				date:'01/02/2018'

  				}
  ];

  ngOnInit() {

    this.socialHistoryService.getSocialHistories(this.patient).subscribe(
      res => {
        this.social_history=res.json()[0].social_history;
        console.log(this.social_history)
        var quarter = Math.ceil(this.social_history.length / 2);
        this.choices_1=this.social_history.splice(0, quarter);
        // this.choices_2=this.social_history.splice(0, quarter);
        // this.choices_3=this.social_history.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
