import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import {DiagnosesService} from '../../services/diagnoses/diagnoses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-surgical-history',
  templateUrl: './surgical-history.component.html',
  styleUrls: ['./surgical-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SurgicalHistoryComponent implements OnInit {

	@Input() patient:any;

  constructor(public diagnosesService:DiagnosesService, public router:Router) { }

  choices_1:any = [];
  choices_2:any = [];
  choices_3:any = [];
  choices:any = [];
  
  

  surgical_history = [
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

    this.diagnosesService.getSurgHistories(this.patient).subscribe(
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
