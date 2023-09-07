import { createAction, props } from '@ngrx/store';
import { SideNavPanelContents } from 'src/app/enums/side-nav-panel-contents';
import { RowCountCriteria } from 'src/app/models/row-count-criteria';
import { XlsxData } from 'src/app/models/xlsx-data';

export const setXlsxFileData = createAction(
  '[Table operations PAGE] Set table data',
  props<{ xlsxFileData: XlsxData }>()
);

export const setTabIndex = createAction(
  '[Table operations PAGE] Set active index',
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

export const calculateRowCountCriteria = createAction(
  '[Side nav PAGE] Calculate row count criteria',
  props<{ rowCountCriteria: RowCountCriteria }>()
);

export const setRowCountCriteria = createAction(
  '[Side nav PAGE] Set row count criteria',
  props<{ rowCountCriteria: RowCountCriteria }>()
);

export const clearRowCountCriteria = createAction(
  '[Side nav PAGE] Clear row count criteria'
);

export const activateRuleLoader = createAction(
  '[Side nav PAGE] Activate rule loader'
);
