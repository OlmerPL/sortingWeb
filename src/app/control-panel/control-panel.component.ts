import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})

export class ControlPanelComponent implements OnInit {
  public dataValue: number;
  public dataTable: number[];
  @Output() sendTable = new EventEmitter<number[]>();

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

  // fillDataTable(event) {
  //   this.dataValue = event.target.value;
  // }

  initialDataTableContent() {
    this.dataTable.length = 0;
    for (let i = 0; i < this.dataValue; i++) {
      this.dataTable.push(i + 1);
    }
    this.dataTable = this.dataTable.slice();

    console.log(this.dataTable);
    this.sendTable.emit(this.dataTable);
  }

  randomizeDataTable() {
    this.dataTable = this.shuffle(this.dataTable);
    this.dataTable = this.dataTable.slice();
    console.log(this.dataTable);
    this.sendTable.emit(this.dataTable);
  }

  ngOnInit() {
    this.initialDataTableContent();
  }
}
