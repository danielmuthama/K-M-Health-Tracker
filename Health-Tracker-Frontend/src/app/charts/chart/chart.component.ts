import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  diseaseData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Anaemia', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
      { label: 'Typhoid', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'Skin Cancer', data: [500, 400, 350, 450, 650], tension: 0.5 },
      { label: 'Appendicitis', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Disease Count',
      },
    },
  };
}