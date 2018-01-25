import { Component,
         OnInit, 
         ViewEncapsulation,
         ViewChild,
         Inject,
         TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {VitalsService} from '../../services/vitals/vitals.service';
import {Http} from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DiagnosesService} from '../../services/diagnoses/diagnoses.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  new_kidneys: boolean = false;
  kidneys: boolean = true;
  new_brain: boolean = false;
  brain: boolean = true;
  switch_brain:string = 'brain';
  switch_kidneys:string = 'kidneys';
  switch_knee:string = 'knee';
  switch_lungs:string = 'lungs';
  switch_heart:string = 'heart';
  switch_stomach:string = 'stomach';
  switch_x_ray:string = 'x-ray';
  switch_immunizations:string = 'immunizations';
  switch_fam_history:string = 'fam_history';
  switch_soc_history:string = 'soc_history';
  switch_surg_history:string = 'surg_history';

  switch_mode:string = 'view';

  surg_conditions:any;
  
  surg_histories:any;

  switch_diagnoses:string = 'diagnoses';

  switch_system_review:string = 'system_review';
  switch_physical_exam:string = 'physical_exam';
  switch_meds:string = 'meds'

  vitals:Vitals = new Vitals();

  vital_list:any;
  
  medication:Medication = new Medication()

  surg_history:SurgHistory = new SurgHistory();

  


  constructor(private _formBuilder: FormBuilder, 
              public vitalsService:VitalsService,
              public diagnosesService:DiagnosesService, 
              public router:Router) { }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature'},
    {data: [55, 56, 72, 69, 66, 50, 52], label: 'Blood Pressure'},
    {data: [45, 54, 65, 58, 72, 42, 65], label: 'Heart Rate'},
    {data: [35, 50, 50, 30, 81, 33, 77], label: 'Respiratory Rate'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Oxygen'}
    
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
  public lineChartLegend:boolean = true;
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  medications = [
        {name: "xyz_medicine",
         date: "12/7/12"
        },
        {name: "xyz_medicine",
         date: "12/7/12"
        },
        {name: "xyz_medicine",
         date: "12/7/12"
        }
  ]

  patient_info = {
    id:1,
    age: 23,
    code_status: "DNR"
  }

  addVitals(){

    this.vitals.patient_id = this.patient_info.id;

    console.log(this.vitals)

    this.vitalsService.addVitals(this.vitals).subscribe(
      res => {
        this.vitals = new Vitals();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );


   }

   

   change(data:any)
  {
    console.log(data);
    if(data==1)
    {
      this.switch_brain = 'new_brain';
    }
    if(data==2)
    {
     this.switch_brain = 'brain'; 
    }
    if(data==3)
    {
      this.switch_lungs = 'new_lungs';
    }
    if(data==4)
    {
      this.switch_lungs = 'lungs';
    }
    if(data==5)
    {
      this.switch_kidneys = 'new_kidneys';
    }
    if(data==6)
    {
      this.switch_kidneys = 'kidneys';
    }
    if(data==7)
    {
      this.switch_knee = 'new_knee';
    }
    if(data==8)
    {
      this.switch_knee = 'knee';
    }
    if(data==9)
    {
      this.switch_heart = 'new_heart';
    }
    if(data==10)
    {
      this.switch_heart = 'heart';
    }
    if(data==11)
    {
      this.switch_stomach = 'new_stomach';
    }
    if(data==12)
    {
      this.switch_stomach = 'stomach';
    }
    if(data==13)
    {
      this.switch_x_ray = 'new-x-ray';
    }
    if(data==14)
    {
      this.switch_x_ray = 'x-ray';
    }
    if(data==15)
    {
      this.switch_immunizations = 'new-immunizations';
    }
    if(data==16)
    {
      this.switch_immunizations = 'immunizations';
    }
    if(data==17)
    {
      this.switch_fam_history = 'new-fam_history';
    }
    if(data==18)
    {
      this.switch_fam_history = 'fam_history';
    }
    if(data==19)
    {
      this.switch_soc_history = 'new-soc_history';
    }
    if(data==20)
    {
      this.switch_soc_history = 'soc_history';
    }
    if(data==21)
    {
      this.switch_surg_history = 'new-surg_history';
    }
    if(data==22)
    {
      this.switch_surg_history = 'surg_history';
    }
    if(data==23)
    {
      this.switch_system_review = 'new-system_review';
    }
    if(data==24)
    {
      this.switch_system_review = 'system_review';
    }
    
    if(data==25)
    {
      this.switch_physical_exam = 'new-physical_exam';
    }
    if(data==26)
    {
      this.switch_physical_exam = 'physical_exam';
    }
    if(data==27)
    {
      this.switch_diagnoses = 'new-diagnoses';
    }
    if(data==28)
    {
      this.switch_diagnoses = 'diagnoses';
    }
    if(data==29)
    {
      this.switch_mode = 'edit';
    }
    if(data==30)
    {
      this.switch_mode = 'view';
    }
    if(data==31)
    {
      this.switch_meds = 'new-meds';
    }
    if(data==32)
    {
      this.switch_meds = 'meds';
    }
  }

  

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.diagnosesService.getConditions().subscribe(
      res => {
        this.surg_conditions=res.json();
        console.log(this.surg_conditions)
        // var quarter = Math.ceil(this.immunizations.length / 4);
        // this.choices_1=this.immunizations.splice(0, quarter);
        // this.choices_2=this.immunizations.splice(0, quarter);
        // this.choices_3=this.immunizations.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );

    this.vitalsService.getVitals().subscribe(
      res => {

        let temperature:any[] = [];
        let blood_pressure:any[] = [];
        let respiratory_rate:any[] = [];
        let oxygen:any[] = [];
        let heart_rate:any[] = [];
        let date:any[] = [];
        this.vital_list=res.json();


        for (var i = 0; i < this.vital_list.length; i++) {
          temperature.push(parseInt(this.vital_list[i].temperature));
          blood_pressure.push(parseInt(this.vital_list[i].blood_pressure));
          heart_rate.push(parseInt(this.vital_list[i].heart_rate));
          oxygen.push(parseInt(this.vital_list[i].oxygen));
          respiratory_rate.push(parseInt(this.vital_list[i].respiratory_rate));
          this.lineChartLabels.push(new Date(this.vital_list[i].date).toDateString());
        }



        this.lineChartData =[
          {data: temperature, label: 'Temperature'},
          {data: blood_pressure, label: 'Blood Pressure'},
          {data: heart_rate, label: 'Heart Rate'},
          {data: oxygen, label: 'Oxygen'},
          {data: respiratory_rate, label: 'Respiratory Rate'},
        ]

        



        this.lineChartLabels=date;

        console.log(this.lineChartLabels);

        // var quarter = Math.ceil(this.immunizations.length / 4);
        // this.choices_1=this.immunizations.splice(0, quarter);
        // this.choices_2=this.immunizations.splice(0, quarter);
        // this.choices_3=this.immunizations.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );

    // this.route.params.subscribe((params: Params) => {
    //   this.switch_physical_exam = params['name'];
    // });


    
  }

}

export class SurgHistory{
  
  public institution_record_id:string;
  public id: number;
  public patient_id: any;
  public conditions:any;
}


export class Vitals{
  patient_id:number;
  temperature:string;
  blood_pressure:string;
  heart_rate:string;
  respiratory_rate:string;
  oxygen:string;
  weight:string;
  height:string;
  bmi:string;
  institution_record_id:string;

}



export class Medication{

}

