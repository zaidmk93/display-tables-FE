import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FileNamesRes } from '../files-list/files';
import { TablesFile } from '../tables-list/tables';


@Injectable()
export class TablesService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:3000'; // todo:: need to move to config

  public getfiles(): Observable<FileNamesRes> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<FileNamesRes>(this.baseUrl + '/files/files-list', httpOptions);
  }

  getTables(fileName: string): Observable<TablesFile> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      params: new HttpParams().set('fileName', fileName)
    };
    return this.http.get<TablesFile>(this.baseUrl + '/files/tables', httpOptions);
  }
}


