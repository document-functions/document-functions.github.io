import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('state');

export const selectTables = createSelector(
  selectAppState,
  (state) => state.tables
);
