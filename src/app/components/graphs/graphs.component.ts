import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { ICategorize, IChart } from '../../models/categorize.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private appSvc: AppService) {}
  lineChart: Chart | null = null;
  pieChart: Chart | null = null;
  barChart: Chart | null = null;
  userLabel: string[] = [];
  userDataY: number[] = [];
  categoryDataX: string[] = [];
  categoryDataY: number[] = [];
  categoryData: ICategorize[] = [];

  areaData: ICategorize[] = [];
  areaDataX: string[] = [];
  areaDataY: number[] = [];

  userData: ICategorize[] = [];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.userData = data.data;

      this.userLabel = this.userData.map(label => label._id);
      this.userDataY = this.userData.map(label => label.val);
    });

    this.appSvc.getCategoryByType('deskNo').subscribe(data => {
      this.categoryData = data;

      this.categoryDataX = this.categoryData.map(label => label._id);
      this.categoryDataY = this.categoryData.map(label => label.val);
      this.updateBarChart();
    });

    this.appSvc.getCategoryByType('area').subscribe(data => {
      this.areaData = data;
      this.areaDataX = this.areaData.map(label => label._id);
      this.areaDataY = this.areaData.map(label => label.val);
      this.updatePieChart();
    });

    this.lineChart = new Chart('canvas-line', {
      type: 'line',
      data: {
        labels: this.userLabel,

        datasets: [
          { data: this.userDataY, fill: false, borderColor: 'rgb(75, 192, 192)', lineTension: 0.1, label: 'Operator wise Entries', }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  updateBarChart() {
    this.barChart = new Chart('canvas-bar', {
      type: 'bar',
      data: {
        labels: this.categoryDataX,
        datasets: [
          {
            label: 'Desk No Entries',
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgba(153, 102, 255)',
              'rgb(75, 192, 192)'
            ],
            borderWidth: 1,
            data: this.categoryDataY
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 200
              }
            }
          ]
        }
      }
    });
  }

  updatePieChart() {
    this.pieChart = new Chart('canvas-pie', {
      type: 'pie',
      data: {
        labels: this.areaDataX,
        datasets: [
          {
            data: this.areaDataY,
            label: 'Area wise Entries',
            backgroundColor: [
              'rgba(255,99,132,0.8)',
              'rgba(54,162,235,0.8)',
              'rgba(255,206,132,0.8)',
              'rgba(201, 203, 207, 0.8)',
              'rgba(153, 102, 255, 0.8)'
            ]
          }
        ]
      }
    });
  }
}
