import { Component } from '@angular/core';
import { WorldVectorMapComponent } from "../../../components/vector-maps/world-vector-map.component";
import { PagetitleComponent } from '@/app/shared/page-title/page-title.component';
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js' // Import world map data
import 'jsvectormap/dist/maps/us-merc-en.js'
import { CardTitleComponent } from "../../../components/card-title.component";
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '@core/model/apexchart.model';

@Component({
    selector: 'app-world-map',
    standalone: true,
    templateUrl: './world-map.component.html',
    styleUrl: './world-map.component.scss',
    imports: [WorldVectorMapComponent, PagetitleComponent, CardTitleComponent, NgApexchartsModule]
})

export class WorldMapComponent {
  countryChart!: Partial<ChartOptions>

  worldMapConfig = {
    // backgroundColor: 'transparent',
    // regionStyle: {
    //   initial: {
    //     fill: '#e3eaef',
    //   },
    // },
    series: {
    regions: [
      {
        attribute: 'fill',
        scale: {
          ScaleKR: '#e6ebff',
          ScaleCA: '#b3c3ff',
          ScaleGB: '#809bfe',
          ScaleNL: '#4d73fe',
          ScaleIT: '#1b4cfe',
          ScaleFR: '#727cf5',
          ScaleJP: '#e7fef7',
          ScaleUS: '#e7e9fd',
          ScaleCN: '#8890f7',
          ScaleIN: '#727cf5',
        },
        values: {
          KR: 'ScaleKR',
          CA: 'ScaleCA',
          GB: 'ScaleGB',
          NL: 'ScaleNL',
          IT: 'ScaleIT',
          FR: 'ScaleFR',
          JP: 'ScaleJP',
          US: 'ScaleUS',
          CN: 'ScaleCN',
          IN: 'ScaleIN',
        },
      },
    ],
    // markers: [
    //   { coords: [41.9, 87.6], name: 'Chicago'},
    //   { coords: [41.9, 12.45], name: 'Vatican City' },
    //   { coords: [43.73, 7.41], name: 'Monaco' },
    //   { coords: [-0.52, 166.93], name: 'Nauru' },
    //   { coords: [-8.51, 179.21], name: 'Tuvalu' },
    //   { coords: [43.93, 12.46], name: 'San Marino' },
    //   { coords: [47.14, 9.52], name: 'Liechtenstein' },
    //   { coords: [7.11, 171.06], name: 'Marshall Islands' },
    //   { coords: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
    //   { coords: [3.2, 73.22], name: 'Maldives' },
    //   { coords: [35.88, 14.5], name: 'Malta' },
    //   { coords: [12.05, -61.75], name: 'Grenada' },
    //   { coords: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
    //   { coords: [13.16, -59.55], name: 'Barbados' },
    //   { coords: [17.11, -61.85], name: 'Antigua and Barbuda' },
    //   { coords: [-4.61, 55.45], name: 'Seychelles' },
    //   { coords: [7.35, 134.46], name: 'Palau' },
    //   { coords: [42.5, 1.51], name: 'Andorra' },
    //   { coords: [14.01, -60.98], name: 'Saint Lucia' },
    //   { coords: [6.91, 158.18], name: 'Federated States of Micronesia' },
    //   { coords: [1.3, 103.8], name: 'Singapore' },
    //   { coords: [0.33, 6.73], name: 'SÃ£o TomÃ© and PrÃncipe' },
    // ],
    // markerStyle: {
    //   initial: {
    //     r: 9,
    //     fill: '#727cf5',
    //     'fill-opacity': 0.9,
    //     stroke: '#fff',
    //     'stroke-width': 7,
    //     'stroke-opacity': 0.4,
    //   },
    //   hover: {
    //     fill: '#727cf5',
    //     stroke: '#fff',
    //     'fill-opacity': 1,
    //     'stroke-width': 1.5,
    //   },
    // },
  }
  }

  usaMapConfig = {
    // zoomOnScroll: true,
    // backgroundColor: 'transparent',
    // regionStyle: {
    //   initial: {
    //     fill: '#39afd1',
    //   },
    //   scale: {
    //     myScaleOne: "#c79efd",
    //       myScaleTwo: "#ffc371",
    //       myScaleThree: "#08d191",
    //   },
    //   values :{
    //     "US-IL": "myScaleOne",
    //     CA: "myScaleTwo"
    //   },
    // },
    series: {
      regions: [{
        attribute: "fill",
        legend: {
          title: "2023 production",
        },
        scale: {
          myScaleOne: "#c79efd",
          myScaleTwo: "#ffc371",
          myScaleThree: "#08d191",
        },
        values :{
          "US-IL": "myScaleOne",
          CA: "myScaleTwo"
        },
        
      }]
    }
  }
  
  ngOnInit(): void {
    this.countryChart = {
      chart: {
        height: 320,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#727cf5'],
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Sessions',
          data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12],
        },
      ],
      xaxis: {
        categories: [
          'India',
          'China',
          'United States',
          'Japan',
          'France',
          'Italy',
          'Netherlands',
          'United Kingdom',
          'Canada',
          'South Korea',
        ],
        axisBorder: {
          show: false,
        },
        labels: {
          formatter: function (val) {
            return val + '%'
          },
        },
      },
    }
  }
}
