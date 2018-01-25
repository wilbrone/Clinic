import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lungs',
  templateUrl: './lungs.component.html',
  styleUrls: ['./lungs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LungsComponent implements OnInit {

  constructor() { }

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      list_item:[{
      		name: 'Photos1'
      	},{
      		name: 'Photos2'
      	},{
      		name: 'Photos3'
      	},{
      		name: 'Photos4'
      	}
      ],
      list_item1:[{
      		name: 'Photos1'
      	},{
      		name: 'Photos2'
      	},{
      		name: 'Photos3'
      	},{
      		name: 'Photos4'
      	}
      ]
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      list_item:[{
      		name: 'Photos5'
      	},{
      		name: 'Photos6'
      	},{
      		name: 'Photos7'
      	},{
      		name: 'Photos8'
      	}
      ]
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      list_item:[{
      		name: 'Photos9'
      	},{
      		name: 'Photos10'
      	},{
      		name: 'Photos11'
      	},{
      		name: 'Photos12'
      	}
      ]
    }
  ];

  ngOnInit() {
  }

}
