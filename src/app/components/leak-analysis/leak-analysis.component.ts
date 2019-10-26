import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, of } from 'rxjs';
import { ILogData } from '../../models/microsoft-auth.model';
import { AppService } from '../../services/app.service';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-leak-analysis',
  templateUrl: './leak-analysis.component.html',
  styleUrls: ['./leak-analysis.component.scss']
})
export class LeakAnalysisComponent implements OnInit {
  private subscriptionData: Subscription | null = null;
  logData: ILogData[] = [];
  selectedLog: ILogData;

  autocompleteInterests: string[] = [];
  interestControl = new FormControl('');
  filteredOptions$: Observable<string[]> = of([]);

  constructor(private activateRoute: ActivatedRoute, private apiSvc: AppService) {}

  ngOnInit() {
    this.apiSvc.getAllRecords().subscribe(data => {
      this.logData = data;
      this.autocompleteInterests = Array.from(
        new Set(this.logData.map(a => a.classification))
      ).sort();
      this.filteredOptions$ = this.interestControl.valueChanges.pipe(
        startWith(''),
        map(value => value.toLowerCase()),
        map(value => {
          return this.autocompleteInterests
            .map(interest => {
              const lowerInterest = interest.toLowerCase();
              let score = 0;
              if (lowerInterest === value) {
                score = 100;
              } else if (lowerInterest.startsWith(value)) {
                score = 50;
              } else if (lowerInterest.includes(value)) {
                score = 10;
              }
              return { interest, score };
            })
            .filter(interestScore => interestScore.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(interestScore => interestScore.interest);
        })
      );
    });
  }

  loadValue(index: number) {
    this.selectedLog = this.logData[index];
    console.log(this.selectedLog);
  }

  updateData(data: ILogData) {
    console.log('data', data.area);
    this.apiSvc.updateRecord(data).subscribe(data => {
      console.log(data);
    });
  }
  createRecord(data: ILogData) {
    data._id = 'jdhfdfjdhfdgfhgrhrhgd';
    data.deskNo = 'Desk4';
    this.apiSvc.createRecord(data).subscribe(data => {
      console.log(data);
    });
  }
}
