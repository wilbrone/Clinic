import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import {SystemReviewService} from '../../services/system-review/system-review.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-system-review',
  templateUrl: './new-system-review.component.html',
  styleUrls: ['./new-system-review.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewSystemReviewComponent implements OnInit {

public system_review: any;
  @Input() patient:any;

  public hematologic: any;
  public hematologic_1: any;
  public hematologic_2: any;
  public hematologic_3: any;
  public endocrine: any;
  public endocrine_1: any;
  public endocrine_2: any;
  public endocrine_3: any;
  public psychiatric: any;
  public psychiatric_1: any;
  public psychiatric_2: any;
  public psychiatric_3: any;
  public musculoskeletal: any;
  public musculoskeletal_1: any;
  public musculoskeletal_2: any;
  public musculoskeletal_3: any;
  public neurologic: any;
  public neurologic_1: any;
  public neurologic_2: any;
  public neurologic_3: any;
  public genital_tract_female: any;
  public genital_tract_female_1: any;
  public genital_tract_female_2: any;
  public genital_tract_female_3: any;
  public genital_tract_male: any;
  public genital_tract_male_1: any;
  public genital_tract_male_2: any;
  public genital_tract_male_3: any;
  public urinary: any;
  public urinary_1: any;
  public urinary_2: any;
  public urinary_3: any;
  public gastrointestinal: any;
  public gastrointestinal_1: any;
  public gastrointestinal_2: any;
  public gastrointestinal_3: any;
  public cardiovascular: any;
  public cardiovascular_1: any;
  public cardiovascular_2: any;
  public cardiovascular_3: any;
  public pulmonary: any;
  public pulmonary_1: any;
  public pulmonary_2: any;
  public pulmonary_3: any;
  public breasts: any;
  public breasts_1: any;
  public breasts_2: any;
  public breasts_3: any;
  public lymphatics: any;
  public lymphatics_1: any;
  public lymphatics_2: any;
  public lymphatics_3: any;
  public neck: any;
  public neck_1: any;
  public neck_2: any;
  public neck_3: any;
  public mouth_and_throat:any;
  public mouth_and_throat_1:any;
  public mouth_and_throat_2:any;
  public mouth_and_throat_3:any;
  public ears:any;
  public ears_1:any;
  public ears_2:any;
  public ears_3:any;
  public eyes:any;
  public eyes_1:any;
  public eyes_2:any;
  public eyes_3:any;
  public skin:any;
  public skin_1:any;
  public skin_2:any;
  public skin_3:any;
  public general:any;
  public general_1:any;
  public general_2:any;
  public general_3:any;

  public hematologic_list: any = [];
  public endocrine_list: any = [];
  public psychiatric_list: any = [];
  public musculoskeletal_list: any = [];
  public neurologic_list: any = [];
  public genital_tract_female_list: any = [];
  public genital_tract_male_list: any = [];
  public urinary_list: any = [];
  public gastroIntestinal_list: any = [];
  public cardiovascular_list: any = [];
  public pulmonary_list: any = [];
  public breasts_list: any = [];
  public lymphatics_list: any = [];
  public neck_list: any = [];
  public mouth_and_throat_list: any = [];
  public ears_list: any = [];
  public eyes_list: any = [];
  public skin_list: any = [];
  public general_list: any = [];

  public new_system_review:SystemReview = new SystemReview();


  quarter:any;

  constructor(public systemReviewService:SystemReviewService, public router:Router) { }


onClickHematologic(hematologic: any, index:number) {
    if(this.hematologic_list.indexOf(hematologic) < 0){
      this.hematologic_list.push(hematologic);
      console.log(this.hematologic_list);
    }else{
      this.hematologic_list.pop(hematologic);
      console.log(this.hematologic_list);
    }
  }


onClickEndocrine(endocrine: any, index:number) {
    if(this.endocrine_list.indexOf(endocrine) < 0){
      this.endocrine_list.push(endocrine);
      console.log(this.endocrine_list);
    }else{
      this.endocrine_list.pop(endocrine);
      console.log(this.endocrine_list);
    }
  }

  onClickPsychiatric(pyschiatric: any, index:number) {
    if(this.psychiatric_list.indexOf(pyschiatric) < 0){
      this.psychiatric_list.push(pyschiatric);
      console.log(this.psychiatric_list);
    }else{
      this.psychiatric_list.pop(pyschiatric);
      console.log(this.psychiatric_list);
    }
  }

  onClickMusculoskeletal(musculoskeletal: any, index:number) {
    if(this.musculoskeletal_list.indexOf(musculoskeletal) < 0){
      this.musculoskeletal_list.push(musculoskeletal);
      console.log(this.musculoskeletal_list);
    }else{
      this.musculoskeletal_list.pop(musculoskeletal);
      console.log(this.musculoskeletal_list);
    }
  }

  onClickNeurologic(neurologic: any) {
    if(this.neurologic_list.indexOf(neurologic) < 0){
      this.neurologic_list.push(neurologic);
      console.log(this.neurologic_list);
    }else{
      this.neurologic_list.pop(neurologic);
      console.log(this.neurologic_list);
    }
  }

  onClickGenital_tract_female(genital_tract_female: any, index:number) {
    if(this.genital_tract_female_list.indexOf(genital_tract_female) < 0){
      this.genital_tract_female_list.push(genital_tract_female);
      console.log(this.genital_tract_female_list);
    }else{
      this.genital_tract_female_list.pop(genital_tract_female);
      console.log(this.genital_tract_female_list);
    }
  }

 onClickGenital_tract_male(genital_tract_male:any, index:number) {
    if(this.genital_tract_male_list.indexOf(genital_tract_male) < 0){
      this.genital_tract_male_list.push(genital_tract_male);
      console.log(this.genital_tract_male_list);
    }else{
      this.genital_tract_male_list.pop(genital_tract_male);
      console.log(this.genital_tract_male_list);
    }
  }


  onClickUrinary(urinary: any, index:number) {
    if(this.urinary_list.indexOf(urinary) < 0){
      this.urinary_list.push(urinary);
      console.log(this.urinary_list);
    }else{
      this.urinary_list.pop(urinary);
      console.log(this.urinary_list);
    }
  }

  onClickGastroIntestinal(gastroIntestinal: any, index:number) {
    if(this.gastroIntestinal_list.indexOf(gastroIntestinal) < 0){
      this.gastroIntestinal_list.push(gastroIntestinal);
      console.log(this.gastroIntestinal_list);
    }else{
      this.gastroIntestinal_list.pop(gastroIntestinal);
      console.log(this.gastroIntestinal_list);
    }
  }

  onClickCardiovascular(cardiovascular: any, index:number) {
    if(this.cardiovascular_list.indexOf(cardiovascular) < 0){
      this.cardiovascular_list.push(cardiovascular);
      console.log(this.cardiovascular_list);
    }else{
      this.cardiovascular_list.pop(cardiovascular);
      console.log(this.cardiovascular_list);
    }
  }

  onClickPulmonary(pulmonary: any, index:number) {
    if(this.pulmonary_list.indexOf(pulmonary) < 0){
      this.pulmonary_list.push(pulmonary);
      console.log(this.pulmonary_list);
    }else{
      this.pulmonary_list.pop(pulmonary);
      console.log(this.pulmonary_list);
    }
  }

  onClickBreasts(breasts: any, index:number) {
    if(this.breasts_list.indexOf(breasts) < 0){
      this.breasts_list.push(breasts);
      console.log(this.breasts_list);
    }else{
      this.breasts_list.pop(breasts);
      console.log(this.breasts_list);
    }
  }

  onClickLymphatics(lymphatics: any, index:number) {
    if(this.lymphatics_list.indexOf(lymphatics) < 0){
      this.lymphatics_list.push(lymphatics);
      console.log(this.lymphatics_list);
    }else{
      this.lymphatics_list.pop(lymphatics);
      console.log(this.lymphatics_list);
    }
  }

  onClickNeck(neck: any, index:number) {
    if(this.neck_list.indexOf(neck) < 0){
      this.neck_list.push(neck);
      console.log(this.neck_list);
    }else{
      this.neck_list.pop(neck);
      console.log(this.neck_list);
    }
  }

  onClickMouth_and_throat(mouth_and_throat: any, index:number) {
    if(this.mouth_and_throat_list.indexOf(mouth_and_throat) < 0){
      this.mouth_and_throat_list.push(mouth_and_throat);
      console.log(this.mouth_and_throat_list);
    }else{
      this.mouth_and_throat_list.pop(mouth_and_throat);
      console.log(this.mouth_and_throat_list);
    }
  }

  onClickEars(ears: any, index:number) {
    if(this.ears_list.indexOf(ears) < 0){
      this.ears_list.push(ears);
      console.log(this.ears_list);
    }else{
      this.ears_list.pop(ears);
      console.log(this.ears_list);
    }
  }

  onClickEyes(eyes: any, index:number) {
    if(this.eyes_list.indexOf(eyes) < 0){
      this.eyes_list.push(eyes);
      console.log(this.eyes_list);
    }else{
      this.eyes_list.pop(eyes);
      console.log(this.eyes_list);
    }
  }

  onClickSkin(skin: any, index:number) {
    if(this.skin_list.indexOf(skin) < 0){
      this.skin_list.push(skin);
      console.log(this.skin_list);
    }else{
      this.skin_list.pop(skin);
      console.log(this.skin_list);
    }
  }

  onClickGeneral(general: any, index:number) {
    if(this.general_list.indexOf(general) < 0){
      this.general_list.push(general);
      console.log(this.general_list);
    }else{
      this.general_list.pop(general);
      console.log(this.general_list);
    }
  }


  addSystemReview() {
    this.new_system_review.patient_id = this.patient.id;
    this.new_system_review.hematologic = this.hematologic_list;
    this.new_system_review.endocrine = this.endocrine_list;
    this.new_system_review.psychiatric = this.psychiatric_list;
    this.new_system_review.musculoskeletal = this.musculoskeletal_list;
    this.new_system_review.neurologic = this.neurologic_list;
    this.new_system_review.genital_tract_female = this.genital_tract_female_list;
    this.new_system_review.genital_tract_male = this.genital_tract_male_list;
    this.new_system_review.urinary = this.urinary_list;
    this.new_system_review.gastrointestinal = this.gastroIntestinal_list;
    this.new_system_review.cardiovascular = this.cardiovascular_list;
    this.new_system_review.pulmonary = this.pulmonary_list;
    this.new_system_review.breasts = this.breasts_list;
    this.new_system_review.lymphatics = this.lymphatics_list;
    this.new_system_review.neck = this.neck_list;
    this.new_system_review.mouth_and_throat = this.mouth_and_throat_list;
    this.new_system_review.ears = this.ears_list;
    this.new_system_review.eyes = this.eyes_list;
    this.new_system_review.skin = this.skin_list;
    this.new_system_review.general = this.general_list;


    this.systemReviewService.addSystemReview(this.new_system_review).subscribe(
      res => {
        this.new_system_review = new SystemReview();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    // this.switch_system_review = 'system_review';

    // this.router.navigate(['/home']);

    
  }

  // change(data:any){
  //   if(data==25)
  //   {
  //     this.switch_system_review = 'new-system_review';
  //   }
  //   if(data==26)
  //   {
      
  //   }

  // }



  



  ngOnInit() {

    this.systemReviewService.getSkinSystemReview().subscribe(
      res => {
        this.skin=res.json();
        var quarter = Math.ceil(this.skin.length / 4);
        this.skin_1=this.skin.splice(0, quarter);
        this.skin_2=this.skin.splice(0, quarter);
        this.skin_3=this.skin.splice(0, quarter);
        
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.systemReviewService)
    console.log(this.systemReviewService.getSkinSystemReview())

    this.systemReviewService.getHematologicSystemReview().subscribe(
      res => {
        this.hematologic=res.json();
        var quarter = Math.ceil(this.hematologic.length / 4);
        this.hematologic_1=this.hematologic.splice(0, quarter);
        this.hematologic_2=this.hematologic.splice(0, quarter);
        this.hematologic_3=this.hematologic.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getEarsSystemReview().subscribe(
      res => {
        this.ears=res.json();
        var quarter = Math.ceil(this.ears.length / 4);
        this.ears_1=this.ears.splice(0, quarter);
        this.ears_2=this.ears.splice(0, quarter);
        this.ears_3=this.ears.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getEyesSystemReview().subscribe(
      res => {
        this.eyes=res.json();
        var quarter = Math.ceil(this.eyes.length / 4);
        this.eyes_1=this.eyes.splice(0, quarter);
        this.eyes_2=this.eyes.splice(0, quarter);
        this.eyes_3=this.eyes.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getMouthAndThroatSystemReview().subscribe(
      res => {
        this.mouth_and_throat=res.json();
        var quarter = Math.ceil(this.mouth_and_throat.length / 4);
        this.mouth_and_throat_1=this.mouth_and_throat.splice(0, quarter);
        this.mouth_and_throat_2=this.mouth_and_throat.splice(0, quarter);
        this.mouth_and_throat_3=this.mouth_and_throat.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getLymphaticsSystemReview().subscribe(
      res => {
        this.lymphatics=res.json();
        var quarter = Math.ceil(this.lymphatics.length / 4);
        this.lymphatics_1=this.lymphatics.splice(0, quarter);
        this.lymphatics_2=this.lymphatics.splice(0, quarter);
        this.lymphatics_3=this.lymphatics.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getNeckSystemReview().subscribe(
      res => {
        this.neck=res.json();
        var quarter = Math.ceil(this.neck.length / 4);
        this.neck_1=this.neck.splice(0, quarter);
        this.neck_2=this.neck.splice(0, quarter);
        this.neck_3=this.neck.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getUrinarySystemReview().subscribe(
      res => {
        this.urinary=res.json();
        var quarter = Math.ceil(this.urinary.length / 4);
        this.urinary_1=this.urinary.splice(0, quarter);
        this.urinary_2=this.urinary.splice(0, quarter);
        this.urinary_3=this.urinary.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getPulmonarySystemReview().subscribe(
      res => {
        this.pulmonary=res.json();
        var quarter = Math.ceil(this.pulmonary.length / 4);
        this.pulmonary_1=this.pulmonary.splice(0, quarter);
        this.pulmonary_2=this.pulmonary.splice(0, quarter);
        this.pulmonary_3=this.pulmonary.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getCardiovascularSystemReview().subscribe(
      res => {
        this.cardiovascular=res.json();
        var quarter = Math.ceil(this.cardiovascular.length / 4);
        this.cardiovascular_1=this.cardiovascular.splice(0, quarter);
        this.cardiovascular_2=this.cardiovascular.splice(0, quarter);
        this.cardiovascular_3=this.cardiovascular.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getBreastsSystemReview().subscribe(
      res => {
        this.breasts=res.json();
        var quarter = Math.ceil(this.breasts.length / 4);
        this.breasts_1=this.breasts.splice(0, quarter);
        this.breasts_2=this.breasts.splice(0, quarter);
        this.breasts_3=this.breasts.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getGastroIntestinalSystemReview().subscribe(
      res => {
        this.gastrointestinal=res.json();
        var quarter = Math.ceil(this.gastrointestinal.length / 4);
        this.gastrointestinal_1=this.gastrointestinal.splice(0, quarter);
        this.gastrointestinal_2=this.gastrointestinal.splice(0, quarter);
        this.gastrointestinal_3=this.gastrointestinal.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getGenitalTractFemaleSystemReview().subscribe(
      res => {
        this.genital_tract_female=res.json();
        var quarter = Math.ceil(this.genital_tract_female.length / 4);
        this.genital_tract_female_1=this.genital_tract_female.splice(0, quarter);
        this.genital_tract_female_2=this.genital_tract_female.splice(0, quarter);
        this.genital_tract_female_3=this.genital_tract_female.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getGenitalTractMaleSystemReview().subscribe(
      res => {
        this.genital_tract_male=res.json();
        var quarter = Math.ceil(this.genital_tract_male.length / 4);
        this.genital_tract_male_1=this.genital_tract_male.splice(0, quarter);
        this.genital_tract_male_2=this.genital_tract_male.splice(0, quarter);
        this.genital_tract_male_3=this.genital_tract_male.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getNeurologicSystemReview().subscribe(
      res => {
        this.neurologic=res.json();
        var quarter = Math.ceil(this.neurologic.length / 4);
        this.neurologic_1=this.neurologic.splice(0, quarter);
        this.neurologic_2=this.neurologic.splice(0, quarter);
        this.neurologic_3=this.neurologic.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getMusculoskeletalSystemReview().subscribe(
      res => {
        this.musculoskeletal=res.json();
        var quarter = Math.ceil(this.musculoskeletal.length / 4);
        this.musculoskeletal_1=this.musculoskeletal.splice(0, quarter);
        this.musculoskeletal_2=this.musculoskeletal.splice(0, quarter);
        this.musculoskeletal_3=this.musculoskeletal.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getPsychiatricSystemReview().subscribe(
      res => {
        this.psychiatric=res.json();
        var quarter = Math.ceil(this.psychiatric.length / 4);
        this.psychiatric_1=this.psychiatric.splice(0, quarter);
        this.psychiatric_2=this.psychiatric.splice(0, quarter);
        this.psychiatric_3=this.psychiatric.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.systemReviewService.getEndocrineSystemReview().subscribe(
      res => {
        this.endocrine=res.json();
        var quarter = Math.ceil(this.endocrine.length / 4);
        this.endocrine_1=this.endocrine.splice(0, quarter);
        this.endocrine_2=this.endocrine.splice(0, quarter);
        this.endocrine_3=this.endocrine.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

  
  }
}
export class SystemReview{
  public institution_record_id:string;
  public name:string;
  public id: number;
  public patient_id:any;
  public hematologic: any;
  public endocrine: any;
  public musculoskeletal: any;
  public psychiatric: any;
  public neurologic: any;
  public genital_tract_female: any;
  public genital_tract_male: any;
  public urinary: any;
  public gastrointestinal: any;
  public cardiovascular: any;
  public pulmonary: any;
  public breasts: any;
  public lymphatics: any;
  public neck: any;
  public mouth_and_throat: any;
  public ears: any;
  public eyes: any;
  public skin: any;
  public general: any;
}



