import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  searchControl = new FormControl();
  selectedLog;
  newEntry = false;
  newOperator;
  operatorDetails = [
    {
      _id: '5da1d3ee9a74553e8e5f347a',
      deskNo: 'Desk 7',
      operator: 'Andrea Murrie',
      defaultDesk: 'Desk 5',
      userRole: 'Controller KMC',
      powerAppsId: 'yMY-k8wVru8'
    },
    {
      _id: '5da1d3ee9a74553e8e5f347b',
      deskNo: 'Desk 6 Baseline Tank Terminal & N40,',
      operator: 'Brandon Dennis',
      defaultDesk: 'Desk 6 Baseline Tank Terminal & N40',
      userRole: 'Controller KMC',
      powerAppsId: '6G_waxj9nGs'
    },
    {
      _id: '5da1d3ee9a74553e8e5f347c',
      deskNo: 'Desk 6 Baseline Tank Terminal & N40,',
      operator: 'Brian Werbiski',
      defaultDesk: 'Desk 6 Baseline Tank Terminal & N40',
      userRole: 'Administrator KMC',
      powerAppsId: 'Pk4X1x5C_i0'
    },
    {
      _id: '5da1d3ee9a74553e8e5f347d',
      deskNo: 'Desk 6 Baseline Tank Terminal & N40,     ',
      operator: 'Chris Nand',
      defaultDesk: 'Desk 6 Baseline Tank Terminal & N40',
      userRole: 'Controller KMC',
      powerAppsId: 'WX5yaHtUtLY'
    },
    {
      _id: '5da1d3ee9a74553e8e5f347e',
      deskNo: '-,     ',
      operator: 'Jesse Clemmer',
      defaultDesk: 'Desk 7',
      userRole: 'View Only User',
      powerAppsId: 'v9o9wofqx3U'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.selectedLog = this.operatorDetails[0];
  }

  loadValue(index: number) {
    this.selectedLog = this.operatorDetails[index];
  }

  getNameInitials(name) {
    console.log(name);
    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('');
    return initials;
  }

  newDataEntry() {
    this.newEntry = !this.newEntry;
  }
}
