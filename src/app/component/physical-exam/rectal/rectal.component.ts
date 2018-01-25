import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PhysicalExamService} from '../../../services/physical-exam/physical-exam.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rectal',
  templateUrl: './rectal.component.html',
  styleUrls: ['./rectal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RectalComponent implements OnInit {

  constructor(private physicalExamService:PhysicalExamService, private router:Router) { }

  public physical_exams:any;
  public physical_exam:any;

  getPhysicalExamDetail() {
    this.physicalExamService.getPhysicalExamDetail(1).subscribe(
      res => {
        console.log(res.text());

      },
      err => {
        console.log(err.text());
      }
    );
  }

  ngOnInit() {

    this.physicalExamService.getPhysicalExams().subscribe(
      res => {
        this.physical_exams=res.json();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );
  }

}
