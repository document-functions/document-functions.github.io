import { createAction, props } from '@ngrx/store';
import { SideNavPanelContents } from 'src/app/enums/side-nav-panel-contents';
import { RowCountIf } from 'src/app/models/row-count-if';
import { XlsxData } from 'src/app/models/xlsx-data';

export const setXlsxFileData = createAction(
  '[Table compare PAGE] Set table data',
  props<{ xlsxFileData: XlsxData }>()
);

export const setTabIndex = createAction(
  '[Table compare PAGE] Set active index',
  props<{ activeTableIndex: number }>()
);

export const setSideNavPanel = createAction(
  '[Side nav PAGE] Set side nav panel',
  props<{ sideNavPanelContent: SideNavPanelContents | null }>()
);

export const deleteAllTables = createAction(
  '[Side nav PAGE] Delete all tables'
);

export const deleteTable = createAction(
  '[Side nav PAGE] Delete table',
  props<{ tableIndex: number }>()
);

export const deleteSheet = createAction(
  '[Side nav PAGE] Delete sheet',
  props<{ tableIndex: number; sheetIndex: number; sheetName: string }>()
);

export const calculateRowCountIf = createAction(
  '[Side nav PAGE] Calculate row count if',
  props<{ rowCountIf: RowCountIf }>()
);

export const setRowCountIf = createAction(
  '[Side nav PAGE] Set row count if',
  props<{ rowCountIf: RowCountIf }>()
);

export const clearRowCountIf = createAction(
  '[Side nav PAGE] Clear row count if'
);
