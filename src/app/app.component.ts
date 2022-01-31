import { OurTable } from './tables-list/tables';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tables-display';
  fileSelected = '';
  tableInfo: OurTable;

  selectedFile(fileName: string) {
    this.fileSelected = fileName;
    this.tableInfo = undefined;
  }

  tableSelected(tableInfo: OurTable) {
    this.tableInfo = tableInfo;
  }
}


