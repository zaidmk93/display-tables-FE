import { TablesService } from './../services/tables.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FileNamesRes } from './files';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit, OnDestroy {
  @Output() outputFileSelected = new EventEmitter<string>();

  fileNamesRes: FileNamesRes | undefined;
  selectedFile = '';
  filesSubscription: Subscription;

  constructor(private tableService: TablesService) { }

  ngOnInit() {
    this.fetchFileList();
  }

  fetchFileList() {
    this.filesSubscription = this.tableService.getfiles()
      .subscribe((data: FileNamesRes) => {
        this.fileNamesRes = { ...data };
      });
  }

  selectFile(fileName: string) {
    this.selectedFile = fileName;
    this.outputFileSelected.emit(fileName);
  }

  ngOnDestroy(): void {
    if (this.filesSubscription) {
      this.filesSubscription.unsubscribe();
    }
  }

}
