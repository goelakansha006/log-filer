import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShiftLogComponent } from './components/shift-log/shift-log.component';
import { FatigueComponent } from './components/fatigue/fatigue.component';
import { LeakAnalysisComponent } from './components/leak-analysis/leak-analysis.component';
import { resolve } from 'q';
import { PageResolve } from './resolvers/page-resolver.module';
import { DashboardResolver } from './resolvers/dashboard-resolver.service';
import { TableComponent } from './components/table/table.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { SystemLogsComponent } from './components/system-logs/system-logs.component';
import { SearchComponent } from './components/search/search.component';
import { DailyStatusComponent } from './components/daily-status/daily-status.component';
import { DailyReportResolver } from './resolvers/daily-status-resolver.service';
import { ShiftResolver } from './resolvers/shift-resolver.service';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app/dashboard' },
  {
    path: 'app/dashboard',
    component: DashboardComponent
  },
  {
    path: 'app/shift-log',
    component: ShiftLogComponent,
    resolve: {
      data: ShiftResolver
    }
  },
  {
    path: 'app/admin',
    component: AdminComponent
  },
  {
    path: 'app/fatigue',
    component: FatigueComponent
  },
  {
    path: 'app/search',
    component: SearchComponent
  },
  {
    path: 'app/leak-analysis',
    component: LeakAnalysisComponent,
    data: {
      pageUrl: 'assets/reports.json'
    },
    resolve: {
      pageData: PageResolve
    }
  },
  {
    path: 'app/table',
    component: TableComponent
  },
  {
    path: 'app/graphs',
    component: GraphsComponent,
    resolve: {
      data: DashboardResolver
    }
  },
  {
    path: 'app/daily-report',
    component: DailyStatusComponent,
    resolve: {
      data: DailyReportResolver
    }
  },
  {
    path: 'app/createLogs',
    component: SystemLogsComponent,
    data: {
      pageUrl: 'assets/reports.json'
    },
    resolve: {
      pageData: PageResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
