import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { ICategorize, IChart } from '../../models/categorize.model';
import { AppService } from '../../services/app.service';
import { ILogData } from '../../models/microsoft-auth.model';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shift-log',
  templateUrl: './shift-log.component.html',
  styleUrls: ['./shift-log.component.scss']
})
export class ShiftLogComponent implements OnInit {
  shiftLogs: ILogData[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      data.data.forEach(data => {
        data.entryDate = data.entryDate.slice(0, 16);
      });
      this.shiftLogs = data.data;
    });
  }
}
