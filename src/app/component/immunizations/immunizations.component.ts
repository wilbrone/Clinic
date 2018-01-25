import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {MedicalHistoryService} from '../../services/medical-history/medical-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-immunizations',
  templateUrl: './immunizations.component.html',
  styleUrls: ['./immunizations.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImmunizationsComponent implements OnInit {

  @Input() patient:any;

  constructor(public medicalHistoryService:MedicalHistoryService, public router:Router) { }

  immunizations:any = [
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

    this.medicalHistoryService.getImmunizations(this.patient).subscribe(
      res => {
        console.log(res.json())
        this.immunizations=res.json();
        console.log(this.immunizations)
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

