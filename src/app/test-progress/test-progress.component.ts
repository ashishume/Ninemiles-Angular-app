import { ApiService } from './../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test-progress',
  templateUrl: './test-progress.component.html',
  styleUrls: ['./test-progress.component.css']
})
export class TestProgressComponent implements OnInit {
  numberOfTest = [];
  show = false;
  constructor(private apiService: ApiService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Payment')
    this.numberOfTest = [
      "reading",
      "speaking",
      "listening",
      "writing"
    ]

  }

  ngOnInit() { }

  showGraphData(section) {
    let labels = []
    let chartData = []
    const query = {
      email: localStorage.getItem('email'),
      section: section
    }
    this.apiService.displaySectionMarks(query).subscribe(data => {
      if (data.status == 200) {

        this.show = true;
        data.body.forEach(element => {
          labels.push("Test " + element.testNumber)
          chartData.push(element.marksBand)
        });
        if (chartData.length != 0 && labels.length != 0) {
          this.chartData = chartData;
          this.labels = labels;
          this.showData()
        } else {
          this.chartData = null;
          this.labels = null;
          this.showData()
        }
      }

    })

  }

  chart1: Chart;
  dynamicColors() {
    let tempArray = []
    for (let i = 0; i < 4; i++) {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      tempArray.push("rgb(" + r + "," + g + "," + b + ")");
    }
    return tempArray;
  }
  labels = []
  chartData = []
  showData() {

    this.chart1 = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: this.dynamicColors()
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Test Analysis Data'
        },
        legend: {
          position: 'top',
          display: false,
          fullWidth: true,
          labels: {
            fontSize: 15
          }
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }






}
