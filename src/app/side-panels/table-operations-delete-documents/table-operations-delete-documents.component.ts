import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTables } from 'src/app/+state';
import { AppPageActions } from 'src/app/+state/actions';
import { XlsxData } from 'src/app/models/xlsx-data';

@Component({
  selector: 'app-table-operations-delete-documents',
  templateUrl: './table-operations-delete-documents.component.html',
  styleUrls: ['./table-operations-delete-documents.component.scss']
})
export class TableOperationsDeleteDocumentsComponent implements OnInit {
  getTables$ = new Observable<XlsxData[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getTables$ = this.store.select(selectTables);
  }

  deleteAllTAbles() {
    this.store.dispatch(AppPageActions.deleteAllTables());
  }

  deleteTable(tableIndex: number) {
    this.store.dispatch(AppPageActions.deleteTable({ tableIndex }));
  }

  deleteSheet(tableIndex: number, sheetIndex: number, sheetName: string) {
    this.store.dispatch(
      AppPageActions.deleteSheet({ tableIndex, sheetIndex, sheetName })
    );
  }
}
