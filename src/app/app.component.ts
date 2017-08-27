import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTableSend: number[];

  resendTable(newTable) {
    this.newTableSend = newTable;
  }
}
