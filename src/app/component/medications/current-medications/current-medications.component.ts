import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {MedicalHistoryService} from '../../../services/medical-history/medical-history.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-current-medications',
  templateUrl: './current-medications.component.html',
  styleUrls: ['./current-medications.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CurrentMedicationsComponent implements OnInit {

  @Input() patient:any;

  constructor(public medicalHistoryService:MedicalHistoryService, public router:Router) { }

  medications:any;

  ngOnInit() {

  	this.medicalHistoryService.getMedications(this.patient).subscribe(
      res => {
        this.medications=res.json();

        console.log(this.medications)
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
