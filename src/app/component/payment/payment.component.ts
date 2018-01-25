import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Sort} from '@angular/material';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {

  desserts = [
    {name: 'Frozen yogurt', amount:'1200', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', amount:'1700', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', amount:'2400', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', amount:'4500', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', amount:'3100', calories: '356', fat: '16', carbs: '49', protein: '4'},
    {name: 'Frozen yogurt', amount:'1200', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', amount:'1700', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', amount:'2400', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', amount:'4500', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', amount:'3100', calories: '356', fat: '16', carbs: '49', protein: '4'},
    {name: 'Frozen yogurt', amount:'1200', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', amount:'1700', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', amount:'2400', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', amount:'4500', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', amount:'3100', calories: '356', fat: '16', carbs: '49', protein: '4'},
    {name: 'Frozen yogurt', amount:'1200', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', amount:'1700', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', amount:'2400', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', amount:'4500', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', amount:'3100', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'amount': return compare(+a.amount, +b.amount, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }

  ngOnInit() {
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
