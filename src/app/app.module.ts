import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesListComponent } from './files-list/files-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TablesService } from './services/tables.service';
import { TablesListComponent } from './tables-list/tables-list.component';
import { ItemFromTheListComponent } from './item-from-the-list/item-from-the-list.component';
import { TablesDisplayComponent } from './tables-display/tables-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesListComponent,
    TablesListComponent,
    ItemFromTheListComponent,
    TablesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
