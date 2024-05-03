import { Component } from '@angular/core';
import { ChartOptions } from '@core/model/apexchart.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-usda-data-v2',
  standalone: true,
  imports: [PagetitleComponent, NgApexchartsModule],
  templateUrl: './usda-data-v2.component.html',
  styleUrl: './usda-data-v2.component.scss'
})

export class UsdaDataV2Component {
  dashedlineChart: Partial<ChartOptions> = {
    chart: {
      height: 380,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3, 5, 3],
      curve: 'straight',
      dashArray: [0, 8, 5],
    },
    series: [
      {
        name: '2008',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: '2015',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: '2025',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    colors: ['#6c757d', '#0acf97', '#39afd1'],
    tooltip: {
      y: {
        title: {
          formatter: function (val) {
            if (val === 'Session Duration') return val + ' (mins)'
            else if (val === 'Page Views') return val + ' per session'
            return val
          },
        },
      },
    },
    grid: {
      borderColor: '#f1f3fa',
    },
    legend: {
      offsetY: 7,
    },
  }
}
