import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Table from 'table-layout'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private data = [{
    col1: 'row1 col1',
    col2: 'row1 col2 '
  },{
    col1: 'row2 col1',
    col2: 'row2 col2 '
  },{
    col1: 'row3 col1',
    col2: 'row3 col2 '
  }];
  private table;
  constructor(public navCtrl: NavController) {
    this.table = new Table(this.data);
  }

}
