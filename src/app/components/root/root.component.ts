import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ILogData } from '../../models/microsoft-auth.model';
import { AppService } from '../../services/app.service';
import { IIdObject } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  userName = '';
  password = '';
  selected = '';
  isLoggedIn = false;
  deskValues: string[] = [];
  deskWithArea: IIdObject[] = [];
  constructor(private snackBar: MatSnackBar, private appSvc: AppService, private route: Router) {}

  ngOnInit() {
    this.appSvc.getArea().subscribe(data => {
      this.deskWithArea = data;
      this.deskWithArea.forEach(data => {
        if (this.deskValues.indexOf(data._id.deskNo) === -1) {
          this.deskValues.push(data._id.deskNo);
        }
      });
    });
    this.deskValues.sort((a, b) => b.localeCompare(a));
    this.selected = this.deskValues[0];
  }

  login() {
    if (this.userName === 'user1' && this.password === 'passw0rd') {
      this.snackBar.open('Login Successful');
      this.isLoggedIn = true;
      this.route.navigate(['/app/dashboard']);
    } else {
      this.snackBar.open('Login Failed');
      this.isLoggedIn = false;
    }
  }
}
