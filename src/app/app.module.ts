import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { RootComponent } from './components/root/root.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShiftLogComponent } from './components/shift-log/shift-log.component';
import { FatigueComponent } from './components/fatigue/fatigue.component';
import { LeakAnalysisComponent } from './components/leak-analysis/leak-analysis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSnackBarModule,
  MatAutocompleteModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DashboardResolver } from './resolvers/dashboard-resolver.service';
import { TableComponent } from './components/table/table.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { SystemLogsComponent } from './components/system-logs/system-logs.component';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { SearchComponent } from './components/search/search.component';
import { DailyStatusComponent } from './components/daily-status/daily-status.component';
import { DailyReportResolver } from './resolvers/daily-status-resolver.service';
import { ShiftTurnoverComponent } from './components/shift-turnover/shift-turnover.component';
import { ShiftResolver } from './resolvers/shift-resolver.service';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppNavBarComponent,
    RootComponent,
    DashboardComponent,
    ShiftLogComponent,
    FatigueComponent,
    LeakAnalysisComponent,
    TableComponent,
    GraphsComponent,
    SystemLogsComponent,
    SearchComponent,
    DailyStatusComponent,
    ShiftTurnoverComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RichTextEditorAllModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  bootstrap: [RootComponent],
  providers: [
    CdkTextareaAutosize,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2000 }
    },
    DashboardResolver,
    DailyReportResolver,
    ShiftResolver
  ]
})
export class AppModule {}
