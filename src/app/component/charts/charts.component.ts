import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {

	constructor() { }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Blood Pressure'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'O2 sat'}
  ];
  public lineChartLabels:Array<any> = ['1/4/11', '5/12/12', '9/27/12', '2/23/14', '2/11/15', '3/12/16', '4/16/17'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  

  ngOnInit() {
  }

  current_medications = [
    {name:'Lisinopril', dosage:'20mg', frequency:'Once daily'},
    {name:'Metformin', dosage:'500mg', frequency:'Once daily'},
    {name:'Novolin', dosage:'70/30', frequency:'5 units ac | 5 units hs'},
    {name:'Ergocalciferol', dosage:'50,000 IU', frequency:'4 caps. weekly'}
  ]

  current_labs = [
    {name:'Hematocrit', dosage:'20mg', frequency:'Once daily'},
    {name:'CBC W/DIFF & PLT CULTURE', dosage:'500mg', frequency:'Once daily'},
    {name:'LIPID PANEL COMP METABOLIC PANEL', dosage:'70/30', frequency:'5 units ac | 5 units hs'},
    {name:'Ergocalciferol', dosage:'50,000 IU', frequency:'4 caps. weekly'}
  ]

  current_x_rays = [
    {name:'Chest X-Ray', dosage:'20mg', frequency:'Once daily'}
    ]


}
