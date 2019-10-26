import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, of, forkJoin } from 'rxjs';
import { ILogData } from '../../models/microsoft-auth.model';
import { AppService } from '../../services/app.service';
import { FormControl } from '@angular/forms';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-system-logs',
  templateUrl: './system-logs.component.html',
  styleUrls: ['./system-logs.component.scss']
})
export class SystemLogsComponent implements OnInit {
  logData: ILogData[] = [];
  selectedLog: ILogData;
  searchControl = new FormControl('');
  searchResult: ILogData[] = [];
  areaData: string[] = [];
  facilityData: string[] = [];
  classificationData: string[] = [];
  deskData: string[] = [];
  date = new Date().toISOString().slice(0, 16);
  constructor(private activateRoute: ActivatedRoute, private apiSvc: AppService) {}

  ngOnInit() {
    this.apiSvc.getAllRecords().subscribe(data => {
      data.forEach(data => {
        data.entryDate = data.entryDate.slice(0, 16);
      });

      this.logData = data;
      this.selectedLog = this.logData[0];
    });

    forkJoin(
      this.apiSvc.getValues('area'),
      this.apiSvc.getValues('facility'),
      this.apiSvc.getValues('classification'),
      this.apiSvc.getValues('deskNo')
    ).subscribe(data => {
      this.areaData = data[0];
      this.facilityData = data[1];
      this.classificationData = data[2];
      this.deskData = data[3];
    });

    // this.frm1.get('family').valueChanges.subscribe(x => console.log(x));
    let values;
    this.searchControl.setValue('');

    this.searchControl.valueChanges.subscribe(x => {
      values = this.apiSvc.searchResults(x);
      values.subscribe(data => {
        this.searchResult = data;
      });
    });

    // const values = this.searchControl.valueChanges.pipe(
    //   startWith(this.searchControl.value),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap(value => this.apiSvc.searchResults(value))
    // );
  }

  loadValue(index: number) {
    this.selectedLog = this.logData[index];
    console.log("selected: "+this.selectedLog);
    console.log("searchresult: "+this.searchResult)
    if (this.searchResult.length > 0) {
      console.log("SearchData: "+this.searchResult[index]);
      this.selectedLog = this.searchResult[index];
    }
  }

  updateData(data: ILogData) {
    this.apiSvc.updateRecord(data).subscribe(data => {
      console.log(data);
    });
  }
  createRecord(data: ILogData) {
    data._id = this.createUUID();
    data.deskNo = 'Desk4';
    this.apiSvc.createRecord(data).subscribe(data => {
      console.log(data);
    });
  }

  createUUID() {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    const uuid = s.join('');
    console.log(uuid);
    return uuid;
  }

  refreshData() {
    this.apiSvc.getAllRecords().subscribe(data => {
      this.logData = data;
      this.selectedLog = this.logData[0];
    });
    this.searchControl.setValue('');
    this.searchResult = [];
  }


}
