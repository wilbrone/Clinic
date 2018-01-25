import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-differential-diagnoses',
  templateUrl: './differential-diagnoses.component.html',
  styleUrls: ['./differential-diagnoses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DifferentialDiagnosesComponent implements OnInit {

	@Input() patient:any;

  constructor() { }

  ngOnInit() {
  }

}
