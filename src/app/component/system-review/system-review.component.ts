import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {SystemReviewService} from '../../services/system-review/system-review.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system-review',
  templateUrl: './system-review.component.html',
  styleUrls: ['./system-review.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SystemReviewComponent implements OnInit {

  constructor(private systemReviewService:SystemReviewService, private router:Router) { }

  public system_exams:any;
  public system_exam:any;
  @Input() patient:any;

  getSystemReviewDetail() {
    this.systemReviewService.getSystemReviewDetail(1).subscribe(
      res => {
        console.log(res.text());

      },
      err => {
        console.log(err.text());
      }
    );
  }

  ngOnInit() {

    this.systemReviewService.getSystemReviews().subscribe(
      res => {
        this.system_exams=res.json();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );
  }

}
