import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppService } from '../../services/app.service';
import { forkJoin } from 'rxjs';
import { ILogData } from '../../models/microsoft-auth.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy, OnInit {
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private appSvc: AppService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  facilityData: string[];
  areaData: string[];
  deskData: string[];
  classificationData: string[];
  mobileQuery: MediaQueryList;
  step = 0;
  searchData: ILogData[] = [
    {
      area: 'Edmonton Terminal',
      facility: 'Meters 20-21',
      equipment: '',
      isAddToQualityStatus: true,
      comments:
        'System Checks:                           \nCheck active alarms      Sampler, Tank 13, Suncor Communication, MB2, Provers, Nitrogen, Fire Water, Nipisi, Tk21                     \nComm Summary       Primary                     \nSystem Status      PCCPRODCS1 ',
      classification: 'Crude Receipt',
      operator: 'Tony Davies',
      flowRate: '',
      throughput: '',
      scheduled: '',
      batchId: '',
      productId: '',
      shipper: '',
      isHeavy: false,
      KMPost: '',
      pressure: '',
      contact: '',
      SRAlarm: true,
      deskNo: 'Desk 1 TransMountain Pipeline',
      powerAppsId: 'dgJ2451lcw4'
    },
    {
      area: 'Puget Sound',
      facility: 'Sumas Tank Farm',
      equipment: '',
      isAddToQualityStatus: false,
      comments: 'Swung receipt from TK 101 to TK 102',
      classification: 'Crude Receipt',
      operator: 'John Derksen',
      flowRate: '',
      throughput: '',
      scheduled: '',
      batchId: '',
      productId: '',
      shipper: '',
      isHeavy: false,
      KMPost: '',
      pressure: '',
      contact: '',
      SRAlarm: false,
      deskNo: 'Desk 2  Puget Sound Pipeline & Burnaby',
      powerAppsId: 'm2dIq6e1glE'
    },
    {
      area: 'Puget Sound',
      facility: 'Sumas',
      equipment: '',
      isAddToQualityStatus: false,
      comments: 'Swung M/L from SUTK 121/122',
      classification: 'Crude Receipt',
      operator: 'John Derksen',
      flowRate: '',
      throughput: '',
      scheduled: '',
      batchId: '',
      productId: '',
      shipper: '',
      isHeavy: false,
      KMPost: '',
      pressure: '',
      contact: '',
      SRAlarm: false,
      deskNo: 'Desk 2  Puget Sound Pipeline & Burnaby',
      powerAppsId: 'nDuUeHhzfb8'
    },
    {
      area: 'Puget Sound',
      facility: 'Sumas Tank Farm',
      equipment: '',
      isAddToQualityStatus: false,
      comments: 'Swung tanks from TK 103 to TK 121/122',
      classification: 'Crude Receipt',
      operator: 'John Derksen',
      flowRate: '',
      throughput: '',
      scheduled: '',
      batchId: '',
      productId: '',
      shipper: '',
      isHeavy: false,
      KMPost: '',
      pressure: '',
      contact: '',
      SRAlarm: false,
      deskNo: 'Desk 2  Puget Sound Pipeline & Burnaby',
      powerAppsId: '4x8KK1Ve3Ws'
    }
  ];



  private _mobileQueryListener: () => void;

  ngOnInit() {
    forkJoin(
      this.appSvc.getValues('area'),
      this.appSvc.getValues('facility'),
      this.appSvc.getValues('classification'),
      this.appSvc.getValues('deskNo')
    ).subscribe(data => {
      this.areaData = data[0];
      this.facilityData = data[1];
      this.classificationData = data[2];
      this.deskData = data[3];
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
