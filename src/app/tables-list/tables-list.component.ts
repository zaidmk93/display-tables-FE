import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { TablesService } from '../services/tables.service';
import { TablesFile, OurTable } from './tables';

@Component({
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.scss']
})
export class TablesListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() tablesFile = '';
  @Output() outputTableSelected = new EventEmitter<OurTable>();

  selectedTable: OurTable;

  fetchedTables: TablesFile | undefined;
  tablesSubscription: Subscription;

  constructor(private tableService: TablesService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tablesFile && this.tablesFile !== '') {
      this.fetchTables();
    }
  }

  fetchTables () {
    this.tablesSubscription = this.tableService.getTables(this.tablesFile)
      .subscribe((data: TablesFile) => {
        this.fetchedTables = { ...data };
      });
  }

  selectTable(tableInfo: OurTable) {
    this.selectedTable = tableInfo;
    this.outputTableSelected.emit(tableInfo);
  }


  ngOnDestroy(): void {
    if (this.tablesSubscription) {
      this.tablesSubscription.unsubscribe();
    }
  }
}
