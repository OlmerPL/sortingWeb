import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})

export class ControlPanelComponent implements OnInit {
  public dataValue: number;

  private dataTable: number[];

  constructor() {
    this.dataValue = 10;
    this.dataTable = [];
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  fillDataTable(event) {
    this.dataValue = event.target.value;
  }

  initialDataTableContent() {
    this.dataTable.length = 0;
    let i: number;
    for (i = 0; i < this.dataValue; i++) {
      this.dataTable.push(i + 1);
    }
    console.log(this.dataTable);
  }

  randomizeDataTable() {
    this.dataTable = this.shuffle(this.dataTable);
    console.log(this.dataTable);
  }

  ngOnInit() {
  }

}
