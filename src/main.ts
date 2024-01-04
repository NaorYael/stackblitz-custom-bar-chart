import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { BarChartItem } from './bar-chart/bar-chart-item';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <custom-bar-chart
    [data]="barChartItems"
    (selectedBar)="onSelectedBarChange($event)"
    ></custom-bar-chart>
  `,
})
export class App {
  barChartItems: BarChartItem[] = [
    {
        "xAxisLabel": "2023-01-26 10:36:11",
        "value": 7,
        "tooltip": "2023-01-26 10:36:11"
    },
    {
        "xAxisLabel": "2022-11-18 10:21:03",
        "value": 1,
        "tooltip": "2022-11-18 10:21:03"
    },
    {
        "xAxisLabel": "2022-10-31 06:13:44",
        "value": 25,
        "tooltip": "2022-10-31 06:13:44"
    },
    {
        "xAxisLabel": "2022-10-29 06:05:59",
        "value": 31,
        "tooltip": "2022-10-29 06:05:59"
    },
    {
        "xAxisLabel": "2022-10-22 09:05:44",
        "value": 0,
        "tooltip": "2022-10-22 09:05:44"
    },
    {
        "xAxisLabel": "2022-10-01 06:49:45",
        "value": 31,
        "tooltip": "2022-10-01 06:49:45"
    }
]
  async onSelectedBarChange(selectedIndex: number) {
    console.log(selectedIndex);
  }
}

bootstrapApplication(App);
