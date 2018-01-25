import { Component,
         OnInit, 
         ViewEncapsulation,
         ViewChild,
         Inject,
         Input,
         TemplateRef } from '@angular/core';
import {DiagnosesService} from '../../services/diagnoses/diagnoses.service';
import {MedicalHistoryService} from '../../services/medical-history/medical-history.service';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-diagnoses',
  templateUrl: './diagnoses.component.html',
  styleUrls: ['./diagnoses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagnosesComponent implements OnInit {

  @Input() patient:any;

  title:any;
  start:any;
  end:any;
  color:any;

  constructor(public medicalHistoryService:MedicalHistoryService, 
  			public router:Router, 
        public dialog: MatDialog, 
        public modal: NgbModal) { }


  

  medical_histories:any;

  ngOnInit() {
    // console.log(this.patient)

  	this.medicalHistoryService.getMedicalHistories(this.patient).subscribe(
      res => {
        this.medical_histories=res.json();

        console.log(this.medical_histories)
        
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog(medical_history): void {

      console.log(medical_history)
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '600px',
        height: '500px',
        data: medical_history

      });


      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.title = result;
      });

  }



}

@Component({
  selector: 'app-history-detail-modal',
  templateUrl: './history-detail-modal.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }





  onNoClick(): void {
    this.dialogRef.close();
  }

  

}
