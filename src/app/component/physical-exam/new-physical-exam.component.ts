import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import {PhysicalExamService} from '../../services/physical-exam/physical-exam.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-physical-exam',
  templateUrl: './new-physical-exam.component.html',
  styleUrls: ['./new-physical-exam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewPhysicalExamComponent implements OnInit {

  public physical_exam: any;
  @Input() patient:any;

  public skin: any;
  public skin_1: any;
  public skin_2: any;
  public skin_3: any;
  public head: any;
  public head_1: any;
  public head_2: any;
  public head_3: any;
  public ears: any;
  public ears_1: any;
  public ears_2: any;
  public ears_3: any;
  public eyes: any;
  public eyes_1: any;
  public eyes_2: any;
  public eyes_3: any;
  public nose: any;
  public nose_1: any;
  public nose_2: any;
  public nose_3: any;
  public throat: any;
  public throat_1: any;
  public throat_2: any;
  public throat_3: any;
  public neck: any;
  public neck_1: any;
  public neck_2: any;
  public neck_3: any;
  public nodes: any;
  public nodes_1: any;
  public nodes_2: any;
  public nodes_3: any;
  public lungs: any;
  public lungs_1: any;
  public lungs_2: any;
  public lungs_3: any;
  public cv: any;
  public cv_1: any;
  public cv_2: any;
  public cv_3: any;
  public breasts: any;
  public breasts_1: any;
  public breasts_2: any;
  public breasts_3: any;
  public chest: any;
  public chest_1: any;
  public chest_2: any;
  public chest_3: any;
  public heart: any;
  public heart_1: any;
  public heart_2: any;
  public heart_3: any;
  public abdomen: any;
  public abdomen_1: any;
  public abdomen_2: any;
  public abdomen_3: any;
  public back_spine:any;
  public back_spine_1:any;
  public back_spine_2:any;
  public back_spine_3:any;
  public extremeties:any;
  public extremeties_1:any;
  public extremeties_2:any;
  public extremeties_3:any;
  public genetalia:any;
  public genetalia_1:any;
  public genetalia_2:any;
  public genetalia_3:any;
  public rectal:any;
  public rectal_1:any;
  public rectal_2:any;
  public rectal_3:any;
  public neurologic:any;
  public neurologic_1:any;
  public neurologic_2:any;
  public neurologic_3:any;
  public cn:any;
  public cn_1:any;
  public cn_2:any;
  public cn_3:any;
  public motor:any;
  public motor_1:any;
  public motor_2:any;
  public motor_3:any;
  public gait:any;
  public gait_1:any;
  public gait_2:any;
  public gait_3:any;
  public spacicity:any;
  public spacicity_1:any;
  public spacicity_2:any;
  public spacicity_3:any;
  public bulk:any;
  public bulk_1:any;
  public bulk_2:any;
  public bulk_3:any;
  public general_appearance:any;
  public general_appearance_1:any;
  public general_appearance_2:any;
  public general_appearance_3:any;

  public new_physical_exam:NewPhysicalExam = new NewPhysicalExam();


  public skin_list: any = [];
  public head_list: any = [];
  public ears_list: any = [];
  public eyes_list: any = [];
  public nose_list: any = [];
  public throat_list: any = [];
  public neck_list: any = [];
  public nodes_list: any = [];
  public lungs_list: any = [];
  public cv_list: any = [];
  public breasts_list: any = [];
  public chest_list: any = [];
  public heart_list: any = [];
  public abdomen_list: any = [];
  public back_spine_list: any = [];
  public extremeties_list: any = [];
  public genetalia_list: any = [];
  public rectal_list: any = [];
  public neurologic_list: any = [];
  public cn_list: any = [];
  public motor_list: any = [];
  public gait_list: any = [];
  public spacicity_list: any = [];
  public bulk_list: any = [];
  public general_appearance_list: any = [];


  public skinQueue: any = [];
  public headQueue: any = [];
  public earsQueue: any = [];
  public eyesQueue: any = [];
  public noseQueue: any = [];
  public throatQueue: any = [];
  public neckQueue: any = [];
  public nodesQueue: any = [];
  public lungsQueue: any = [];
  public cvQueue: any = [];
  public breastsQueue: any = [];
  public chestQueue: any = [];
  public heartQueue: any = [];
  public abdomenQueue: any = [];
  public back_spineQueue: any = [];
  public extremetiesQueue: any = [];
  public genetaliaQueue: any = [];
  public rectalQueue: any = [];
  public neurologicQueue: any = [];
  public cnQueue: any = [];
  public motorQueue: any = [];
  public gaitQueue: any = [];
  public spacicityQueue: any = [];
  public bulkQueue: any = [];
  public general_appearanceQueue: any = [];

  switch_physical_exam:string = 'new-physical_exam';

  quarter:any;
  

  constructor(public physicalExamService:PhysicalExamService, public router:Router) { }

  social_factors = [
  				{
	  				name:'Boots1',
	  				date:'01/02/2018'

  				},
  				{
	  				name:'Boots2',
	  				date:'01/02/2018'

  				},
  				{
	  				name:'Boots3',
	  				date:'01/02/2018'

  				},
  				{
	  				name:'Boots4',
	  				date:'01/02/2018'

  				},

  ];

  col_1:any = [];
  col_2:any = [];
  col_3:any = [];
  col_4:any = [];
  
  checked = false;

  onClickSkin(skin: any, index:number) {
    if(this.skin_list.indexOf(skin) < 0){
      this.skin_list.push(skin);
      this.skinQueue.push(index);
      console.log(this.skin_list);
    }else{
      this.skin_list.pop(skin);
      this.skinQueue.pop(index);
      console.log(this.skin_list);
    }
  }

  onClickHead(head: any, index:number) {
    if(this.head_list.indexOf(head) < 0){
      this.head_list.push(head);
      this.headQueue.push(index);
      console.log(this.head_list);
    }else{
      this.head_list.pop(head);
      this.headQueue.pop(index);
      console.log(this.head_list);
    }
  }

  onClickEars(ears: any, index:number) {
    if(this.ears_list.indexOf(ears) < 0){
      this.ears_list.push(ears);
      this.earsQueue.push(index);
      console.log(this.ears_list);
    }else{
      this.ears_list.pop(ears);
      this.earsQueue.pop(index);
      console.log(this.ears_list);
    }
  }

  onClickEyes(eyes: any, index:number) {
    if(this.eyes_list.indexOf(eyes) < 0){
      this.eyes_list.push(eyes);
      this.eyesQueue.push(index);
      console.log(this.eyes_list);
    }else{
      this.eyes_list.pop(eyes);
      this.eyesQueue.pop(index);
      console.log(this.eyes_list);
    }
  }

  onClickNose(nose: any, index:number) {
    if(this.nose_list.indexOf(nose) < 0){
      this.nose_list.push(nose);
      this.noseQueue.push(index);
      console.log(this.nose_list);
    }else{
      this.nose_list.pop(nose);
      this.noseQueue.pop(index);
      console.log(this.nose_list);
    }
  }

  onClickThroat(throat: any, index:number) {
    if(this.throat_list.indexOf(throat) < 0){
      this.throat_list.push(throat);
      this.throatQueue.push(index);
      console.log(this.throat_list);
    }else{
      this.throat_list.pop(throat);
      this.throatQueue.pop(index);
      console.log(this.throat_list);
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

  onClickNodes(nodes: any, index:number) {
    if(this.nodes_list.indexOf(nodes) < 0){
      this.nodes_list.push(nodes);
      console.log(this.nodes_list);
    }else{
      this.nodes_list.pop(nodes);
      console.log(this.nodes_list);
    }
  }

  onClickLungs(lungs: any, index:number) {
    if(this.lungs_list.indexOf(lungs) < 0){
      this.lungs_list.push(lungs);
      console.log(this.lungs_list);
    }else{
      this.lungs_list.pop(lungs);
      console.log(this.lungs_list);
    }
  }

  onClickCV(cv: any, index:number) {
    if(this.cv_list.indexOf(cv) < 0){
      this.cv_list.push(cv);
      console.log(this.cv_list);
    }else{
      this.cv_list.pop(cv);
      console.log(this.cv_list);
    }
  }

  onClickBreasts(breasts: any, index:number) {
    if(this.breasts_list.indexOf(breasts) < 0){
      this.breasts_list.push(breasts);
      this.breastsQueue.push(index);
      console.log(this.breasts_list);
    }else{
      this.breasts_list.pop(breasts);
      this.breastsQueue.pop(index);
      console.log(this.breasts_list);
    }
  }

  onClickChest(chest: any, index:number) {
    if(this.chest_list.indexOf(chest) < 0){
      this.chest_list.push(chest);
      this.chestQueue.push(index);
      console.log(this.chest_list);
    }else{
      this.chest_list.pop(chest);
      this.chestQueue.pop(index);
      console.log(this.chest_list);
    }
  }

  onClickHeart(heart: any, index:number) {
    if(this.heart_list.indexOf(heart) < 0){
      this.heart_list.push(heart);
      this.heartQueue.push(index);
      console.log(this.heart_list);
    }else{
      this.heart_list.pop(heart);
      this.heartQueue.pop(index);
      console.log(this.heart_list);
    }
  }

  onClickAbdomen(abdomen: any, index:number) {
    if(this.abdomen_list.indexOf(abdomen) < 0){
      this.abdomen_list.push(abdomen);
      this.abdomenQueue.push(index);
      console.log(this.abdomen_list);
    }else{
      this.abdomen_list.pop(abdomen);
      this.abdomenQueue.pop(index);
      console.log(this.abdomen_list);
    }
  }

  onClickBackSpine(back_spine: any, index:number) {
    if(this.back_spine_list.indexOf(back_spine) < 0){
      this.back_spine_list.push(back_spine);
      this.skinQueue.push(index);
      console.log(this.back_spine_list);
    }else{
      this.back_spine_list.pop(back_spine);
      this.back_spineQueue.pop(index);
      console.log(this.back_spine_list);
    }
  }

  onClickExtremeties(extremeties: any, index:number) {
    if(this.extremeties_list.indexOf(extremeties) < 0){
      this.extremeties_list.push(extremeties);
      this.extremetiesQueue.push(index);
      console.log(this.extremeties_list);
    }else{
      this.extremeties_list.pop(extremeties);
      this.extremetiesQueue.pop(index);
      console.log(this.extremeties_list);
    }
  }

  onClickGenetalia(genetalia: any, index:number) {
    if(this.genetalia_list.indexOf(genetalia) < 0){
      this.genetalia_list.push(genetalia);
      this.genetaliaQueue.push(index);
      console.log(this.genetalia_list);
    }else{
      this.genetalia_list.pop(genetalia);
      this.genetaliaQueue.pop(index);
      console.log(this.genetalia_list);
    }
  }

  onClickRectal(rectal: any, index:number) {
    if(this.rectal_list.indexOf(rectal) < 0){
      this.rectal_list.push(rectal);
      this.rectalQueue.push(index);
      console.log(this.rectal_list);
    }else{
      this.rectal_list.pop(rectal);
      this.rectalQueue.pop(index);
      console.log(this.rectal_list);
    }
  }

  onClickNeurologic(neurologic: any, index:number) {
    if(this.neurologic_list.indexOf(neurologic) < 0){
      this.neurologic_list.push(neurologic);
      this.neurologicQueue.push(index);
      console.log(this.skin_list);
    }else{
      this.neurologic_list.pop(neurologic);
      this.neurologicQueue.pop(index);
      console.log(this.neurologic_list);
    }
  }

  onClickCN(cn: any, index:number) {
    if(this.cn_list.indexOf(cn) < 0){
      this.cn_list.push(cn);
      this.cnQueue.push(index);
      console.log(this.cn_list);
    }else{
      this.cn_list.pop(cn);
      this.cnQueue.pop(index);
      console.log(this.cn_list);
    }
  }

  onClickMotor(motor: any, index:number) {
    if(this.motor_list.indexOf(motor) < 0){
      this.motor_list.push(motor);
      this.motorQueue.push(index);
      console.log(this.motor_list);
    }else{
      this.motor_list.pop(motor);
      this.motorQueue.pop(index);
      console.log(this.motor_list);
    }
  }

  onClickGait(gait: any, index:number) {
    if(this.gait_list.indexOf(gait) < 0){
      this.gait_list.push(gait);
      this.gaitQueue.push(index);
      console.log(this.gait_list);
    }else{
      this.gait_list.pop(gait);
      this.gaitQueue.pop(index);
      console.log(this.gait_list);
    }
  }

  onClickSpacicity(spacicity: any, index:number) {
    if(this.spacicity_list.indexOf(spacicity) < 0){
      this.spacicity_list.push(spacicity);
      this.spacicityQueue.push(index);
      console.log(this.spacicity_list);
    }else{
      this.spacicity_list.pop(spacicity);
      this.spacicityQueue.pop(index);
      console.log(this.spacicity_list);
    }
  }

  onClickBulk(bulk: any, index:number) {
    if(this.bulk_list.indexOf(bulk) < 0){
      this.bulk_list.push(bulk);
      this.bulkQueue.push(index);
      console.log(this.bulk_list);
    }else{
      this.bulk_list.pop(bulk);
      this.bulkQueue.pop(index);
      console.log(this.bulk_list);
    }
  }

  onClickGeneralAppearance(general_appearance: any, index:number) {
    if(this.general_appearance_list.indexOf(general_appearance) < 0){
      this.general_appearance_list.push(general_appearance);
      this.general_appearanceQueue.push(index);
      console.log(this.general_appearance_list);
    }else{
      this.general_appearance_list.pop(general_appearance);
      this.general_appearanceQueue.pop(index);
      console.log(this.general_appearance_list);
    }
  }

  

  addPhysicalExam() {
    this.new_physical_exam.patient_id = this.patient.id;
    // this.new_physical_exam.institution_record_id = this.institution_record_id;
    this.new_physical_exam.skin = this.skin_list;
    this.new_physical_exam.head = this.head_list;
    this.new_physical_exam.ears = this.ears_list;
    this.new_physical_exam.eyes = this.eyes_list;
    this.new_physical_exam.nose = this.nose_list;
    this.new_physical_exam.throat = this.throat_list;
    this.new_physical_exam.neck = this.neck_list;
    this.new_physical_exam.nodes = this.nodes_list;
    this.new_physical_exam.lungs = this.lungs_list;
    this.new_physical_exam.cv = this.cv_list;
    this.new_physical_exam.breasts = this.breasts_list;
    this.new_physical_exam.chest = this.chest_list;
    this.new_physical_exam.heart = this.heart_list;
    this.new_physical_exam.abdomen = this.abdomen_list;
    this.new_physical_exam.back_spine = this.back_spine_list;
    this.new_physical_exam.extremeties = this.extremeties_list;
    this.new_physical_exam.genetalia = this.genetalia_list;
    this.new_physical_exam.rectal = this.rectal_list;
    this.new_physical_exam.neurologic = this.neurologic_list;
    this.new_physical_exam.cn = this.cn_list;
    this.new_physical_exam.motor = this.motor_list;
    this.new_physical_exam.gait = this.gait_list;
    this.new_physical_exam.spacicity = this.spacicity_list;
    this.new_physical_exam.bulk = this.bulk_list;
    this.new_physical_exam.general_appearance = this.general_appearance_list;


    // this.router.navigate(['/home', this.switch_physical_exam.name]);



    this.physicalExamService.addPhysicalExam(this.new_physical_exam).subscribe(
      res => {
        this.new_physical_exam = new NewPhysicalExam();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );

    this.skin_list = [];

    // this.switch_physical_exam = 'physical_exam';

    // this.router.navigate(['/home']);

    
  }

  // change(data:any){
  //   if(data==25)
  //   {
  //     this.switch_physical_exam = 'new-physical_exam';
  //   }
  //   if(data==26)
  //   {
      
  //   }

  // }



  



  ngOnInit() {

    this.physicalExamService.getSkinPhysicalExams().subscribe(
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
    console.log(this.physicalExamService)
    console.log(this.physicalExamService.getHeadPhysicalExams())

    this.physicalExamService.getHeadPhysicalExams().subscribe(
      res => {
        this.head=res.json();
        var quarter = Math.ceil(this.head.length / 4);
        this.head_1=this.head.splice(0, quarter);
        this.head_2=this.head.splice(0, quarter);
        this.head_3=this.head.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getEarsPhysicalExams().subscribe(
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

    this.physicalExamService.getEyesPhysicalExams().subscribe(
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

    this.physicalExamService.getNosePhysicalExams().subscribe(
      res => {
        this.nose=res.json();
        var quarter = Math.ceil(this.nose.length / 4);
        this.nose_1=this.nose.splice(0, quarter);
        this.nose_2=this.nose.splice(0, quarter);
        this.nose_3=this.nose.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getThroatPhysicalExams().subscribe(
      res => {
        this.throat=res.json();
        var quarter = Math.ceil(this.throat.length / 4);
        this.throat_1=this.throat.splice(0, quarter);
        this.throat_2=this.throat.splice(0, quarter);
        this.throat_3=this.throat.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getNeckPhysicalExams().subscribe(
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

    this.physicalExamService.getNodesPhysicalExams().subscribe(
      res => {
        this.nodes=res.json();
        var quarter = Math.ceil(this.nodes.length / 4);
        this.nodes_1=this.nodes.splice(0, quarter);
        this.nodes_2=this.nodes.splice(0, quarter);
        this.nodes_3=this.nodes.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getLungsPhysicalExams().subscribe(
      res => {
        this.lungs=res.json();
        var quarter = Math.ceil(this.lungs.length / 4);
        this.lungs_1=this.lungs.splice(0, quarter);
        this.lungs_2=this.lungs.splice(0, quarter);
        this.lungs_3=this.lungs.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getCVPhysicalExams().subscribe(
      res => {
        this.cv=res.json();
        var quarter = Math.ceil(this.cv.length / 4);
        this.cv_1=this.cv.splice(0, quarter);
        this.cv_2=this.cv.splice(0, quarter);
        this.cv_3=this.cv.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getBreastsPhysicalExams().subscribe(
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

    this.physicalExamService.getChestPhysicalExams().subscribe(
      res => {
        this.chest=res.json();
        var quarter = Math.ceil(this.chest.length / 4);
        this.chest_1=this.chest.splice(0, quarter);
        this.chest_2=this.chest.splice(0, quarter);
        this.chest_3=this.chest.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getHeartPhysicalExams().subscribe(
      res => {
        this.heart=res.json();
        var quarter = Math.ceil(this.heart.length / 4);
        this.heart_1=this.heart.splice(0, quarter);
        this.heart_2=this.heart.splice(0, quarter);
        this.heart_3=this.heart.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getAbdomenPhysicalExams().subscribe(
      res => {
        this.abdomen=res.json();
        var quarter = Math.ceil(this.abdomen.length / 4);
        this.abdomen_1=this.abdomen.splice(0, quarter);
        this.abdomen_2=this.abdomen.splice(0, quarter);
        this.abdomen_3=this.abdomen.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getBackSpinePhysicalExams().subscribe(
      res => {
        this.back_spine=res.json();
        var quarter = Math.ceil(this.back_spine.length / 4);
        this.back_spine_1=this.back_spine.splice(0, quarter);
        this.back_spine_2=this.back_spine.splice(0, quarter);
        this.back_spine_3=this.back_spine.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getExtremetiesPhysicalExams().subscribe(
      res => {
        this.extremeties=res.json();
        var quarter = Math.ceil(this.extremeties.length / 4);
        this.extremeties_1=this.extremeties.splice(0, quarter);
        this.extremeties_2=this.extremeties.splice(0, quarter);
        this.extremeties_3=this.extremeties.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getGenetaliaPhysicalExams().subscribe(
      res => {
        this.genetalia=res.json();
        var quarter = Math.ceil(this.genetalia.length / 4);
        this.genetalia_1=this.genetalia.splice(0, quarter);
        this.genetalia_2=this.genetalia.splice(0, quarter);
        this.genetalia_3=this.genetalia.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getRectalPhysicalExams().subscribe(
      res => {
        this.rectal=res.json();
        var quarter = Math.ceil(this.rectal.length / 4);
        this.rectal_1=this.rectal.splice(0, quarter);
        this.rectal_2=this.rectal.splice(0, quarter);
        this.rectal_3=this.rectal.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );

    this.physicalExamService.getNeurologicPhysicalExams().subscribe(
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

    this.physicalExamService.getCNPhysicalExams().subscribe(
      res => {
        this.cn=res.json();
        var quarter = Math.ceil(this.cn.length / 4);
        this.cn_1=this.cn.splice(0, quarter);
        this.cn_2=this.cn.splice(0, quarter);
        this.cn_3=this.cn.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );


    this.physicalExamService.getGaitPhysicalExams().subscribe(
      res => {
        this.gait=res.json();
        var quarter = Math.ceil(this.gait.length / 4);
        this.gait_1=this.gait.splice(0, quarter);
        this.gait_2=this.gait.splice(0, quarter);
        this.gait_3=this.gait.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );


    this.physicalExamService.getSpacicityPhysicalExams().subscribe(
      res => {
        this.spacicity=res.json();
        var quarter = Math.ceil(this.spacicity.length / 4);
        this.spacicity_1=this.spacicity.splice(0, quarter);
        this.spacicity_2=this.spacicity.splice(0, quarter);
        this.spacicity_3=this.spacicity.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );


    this.physicalExamService.getBulkPhysicalExams().subscribe(
      res => {
        this.bulk=res.json();
        var quarter = Math.ceil(this.bulk.length / 4);
        this.bulk_1=this.bulk.splice(0, quarter);
        this.bulk_2=this.bulk.splice(0, quarter);
        this.bulk_3=this.bulk.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );


    this.physicalExamService.getGeneralAppearancePhysicalExams().subscribe(
      res => {
        this.general_appearance=res.json();
        var quarter = Math.ceil(this.general_appearance.length / 4);
        this.general_appearance_1=this.general_appearance.splice(0, quarter);
        this.general_appearance_2=this.general_appearance.splice(0, quarter);
        this.general_appearance_3=this.general_appearance.splice(0, quarter);
      },
      error => {
        console.log(error);
      }
    );


  	

  var quarter = Math.ceil(this.social_factors.length / 4);
  this.col_1=this.social_factors.splice(0, quarter);
  this.col_2=this.social_factors.splice(0, quarter);
  this.col_3=this.social_factors.splice(0, quarter);
  // this.col_4=this.social_factors.splice(quarter+quarter+quarter, quarter+quarter+quarter+quarter);
  // var leftSide = this.social_factors.splice(0, half);
  // var rightSide = this.social_factors.splice(half, this.social_factors.length);
  console.log(this.col_2)
  
  }


  

}


export class NewPhysicalExam{
  institution_record_id:string;
  public id: number;
  public name: string;
  public patient_id: any;
  public skin: any;
  public head: any;
  public ears: any;
  public eyes: any;
  public nose: any;
  public throat: any;
  public neck: any;
  public nodes: any;
  public lungs: any;
  public cv: any;
  public breasts: any;
  public chest: any;
  public heart: any;
  public abdomen: any;
  public back_spine: any;
  public extremeties: any;
  public genetalia: any;
  public rectal: any;
  public neurologic: any;
  public cn: any;
  public motor: any;
  public gait: any;
  public spacicity: any;
  public bulk: any;
  public general_appearance: any;
}
