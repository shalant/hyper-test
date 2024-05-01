import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, UsdaInfo } from '../models/usdainfo.model';
import { UsdaServiceService } from '../services/usda-service.service';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-usda-data',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './usda-data.component.html',
  styleUrl: './usda-data.component.scss'
})

export class UsdaDataComponent implements OnInit {

  blah: string = '';
  // dollar sign means observable stream of values
  usdaData$?: Observable<Datum[]>;
  usdaDataWithParams$?: Observable<Datum[]>;
  selectedMetric: string = '';
  selectedCommodity: string = '';
  selectedYear: string = '';

  //charts
  chart: any = [];
  datesArray: string[] = [];
  usefulArray: Datum[] = [];
  arr:number[] = [1,2,3];

  //2nd chart attempt
  chartData: any;
  labelData: any[] = [];
  realData: any[] = [];
  colorData: any[] = [];

  onSelectMetric(event: Event) {
    this.selectedMetric = (event.target as HTMLSelectElement).value;
    console.log('selectedMetric', this.selectedMetric)
  }

  onSelectCommodity(event: Event) {
    this.selectedCommodity = (event.target as HTMLSelectElement).value;
    console.log('selectedCommodity', this.selectedCommodity)
  }

  onSelectYear(event: Event) {
    this.selectedYear = (event.target as HTMLSelectElement).value;
    console.log('selectedYear', this.selectedYear)
  }

  constructor(private usdaService: UsdaServiceService) {}

  ngOnInit(): void {
    // this.usdaData$ = this.usdaService.getAllUsdaDataNoParams();
    console.log(this.usdaData$);

    const mappedArr = this.arr.map(value => value + 1)
    console.log(mappedArr);
    const filteredArr = this.arr.filter(v => v % 2 === 0);
    console.log(filteredArr);

    // this.usdaData$.subscribe(result => {
    //   this.chartData = result;
    //   if(this.chartData != null) {
    //     for(let i = 0; i < this.chartData.length; i++) {
    //       this.labelData.push(this.chartData[i].year)
    //       this.realData.push(this.chartData[i].value)
    //     }
    //     this.RenderChart(this.labelData, this.realData, 'bar', 'barchart');
    //   }
    // })

    console.log(this.labelData);
    console.log(this.realData);
  }

  RenderChart(labelData:any, mainData:any, type: any, id:any) {
    // const myChart = new Chart("piechart", {
    //   type: 'bar',
    const myChart = new Chart(id, {
      type: type,
      data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: labelData,
        datasets: [{
          label: '# of Votes',
          data: mainData,
          backgroundColor: 'teal',
          borderColor: [],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  async loadDataWithParams (selectedMetric:string, selectedCommodity:string, selectedYear:string) {
    console.log(selectedMetric, selectedCommodity, selectedYear);
    // var blah = this.usdaService.loadDataWithParams(selectedCommodity, selectedMetric, selectedYear)
    //   .subscribe() 
    // console.log(blah);
    };

  }