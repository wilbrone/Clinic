import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
