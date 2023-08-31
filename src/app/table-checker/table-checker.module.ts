import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCheckerRoutingModule } from './table-checker-routing.module';
import { MainComponent } from './main/main.component';
import { TableCompareComponent } from './table-compare/table-compare.component';
import { TableArchiveComponent } from './table-archive/table-archive.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [MainComponent, TableCompareComponent, TableArchiveComponent],
  imports: [
    CommonModule,
    TableCheckerRoutingModule,
    AngularMaterialModule,
  ],
})
export class TableCheckerModule {}
