import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILogData } from '../../models/microsoft-auth.model';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.scss']
})
export class DailyStatusComponent implements OnInit {
  reportData: ILogData[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      data.data.forEach(data => {
        data.entryDate = data.entryDate.slice(0, 16);
      });
      this.reportData = data.data;
    });
  }
}
