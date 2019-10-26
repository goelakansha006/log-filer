import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss']
})
export class AppNavBarComponent implements OnInit {
  selected = '';
  @Input() deskName = '';
  @Input() userName = '';
  constructor() {}

  ngOnInit() {}
}
