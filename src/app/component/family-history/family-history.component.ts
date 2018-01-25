import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FamilyHistoryService} from '../../services/family-history/family-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyHistoryComponent implements OnInit {

  constructor(public familyHistoryService:FamilyHistoryService, public router:Router) { }

  choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];

  @Input() patient:any;
  
  

  family_history = [
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

    console.log(this.patient)

    this.familyHistoryService.getFamilyHistories(this.patient).subscribe(
      res => {
        this.choices=res.json()[0].conditions;

        console.log(res.json()[0].conditions)
        var quarter = Math.ceil(this.choices.length / 4);
        this.choices_1=this.choices.splice(0, quarter);
        this.choices_2=this.choices.splice(0, quarter);
        this.choices_3=this.choices.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
