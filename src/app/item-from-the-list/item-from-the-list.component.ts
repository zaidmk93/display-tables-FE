import { OurTable } from './../tables-list/tables';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-from-the-list',
  templateUrl: './item-from-the-list.component.html',
  styleUrls: ['./item-from-the-list.component.scss']
})
export class ItemFromTheListComponent implements OnInit {
  @Input() itemName: String;
  @Input() itemSelected = false;

  constructor() { }

  ngOnInit() {
  }

}
