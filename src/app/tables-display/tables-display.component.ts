import { OurTable } from './../tables-list/tables';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables-display',
  templateUrl: './tables-display.component.html',
  styleUrls: ['./tables-display.component.scss']
})
export class TablesDisplayComponent {
  @Input() tableInfo: OurTable;

  constructor() { }
}
