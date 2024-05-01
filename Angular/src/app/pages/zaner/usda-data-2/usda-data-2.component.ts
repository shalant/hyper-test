import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Datum, UsdaInfo } from '../models/usdainfo.model';
import { UsdaServiceService } from '../services/usda-service.service';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usda-data',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './usda-data-2.component.html',
  styleUrl: './usda-data-2.component.scss'
})

export class UsdaData2Component implements OnInit, OnDestroy {

  // dollar sign means observable stream of values
  usdaData$?: Observable<Datum[]>;
  newUsdaData$?: Observable<Datum[]>;
  // newUsdaData: any;

  selectedMetric: string = '';
  selectedCommodity: string = '';
  selectedYear: string = '';

  //3nd chart attempt
  newChartData: any;
  newLabelData: any[] = [];
  newRealData: any[] = [];
  numberArray: any[] = [];
  newColorData: any[] = [];

  getUsdaSubscription?: Subscription;

  constructor(private usdaService: UsdaServiceService,
    private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  onSelectMetric(event: Event) {
    this.selectedMetric = (event.target as HTMLSelectElement).value;
  }
  onSelectCommodity(event: Event) {
    this.selectedCommodity = (event.target as HTMLSelectElement).value;
  }
  onSelectYear(event: Event) {
    this.selectedYear = (event.target as HTMLSelectElement).value;
  }
  
  

  loadDataWithParams(selectedMetric:string, selectedCommodity:string, selectedYear:string): void {
    console.log(selectedMetric, selectedCommodity, selectedYear);
    console.log(`https://localhost:7281/api/UsdaInfo?Metric=${selectedMetric}&Commodity=${selectedCommodity}&Year=${selectedYear}`)

    this.newUsdaData$ = this.http.get<Datum[]>(`https://localhost:7281/api/UsdaInfo?Metric=${selectedMetric}&Commodity=${selectedCommodity}&Year=${selectedYear}`)
    // this.http.get<Datum[]>(`https://localhost:7281/api/UsdaInfo?Metric=${selectedMetric}&Commodity=${selectedCommodity}&Year=${selectedYear}`)
      // .subscribe({
      //   next: (response) => {
      //     debugger;
      //   }
      // })
    
    // THIS KINDA WORKS
    // this.newUsdaData$.subscribe(result => {
    //   this.newChartData = result;
    //   if(this.newChartData != null) {
    //     for(let i = 0; i < this.chartData.length; i++) {
    //       this.newLabelData.push(this.newChartData[i].year)
    //       this.newRealData.push(this.newChartData[i].value)
    //     }
    //     this.RenderChart(this.newLabelData, this.newRealData, 'bar', 'barchart');
    //   }
    // })
    debugger;
    this.getUsdaSubscription = this.newUsdaData$
      .subscribe({
        next: (response) => {
          debugger;
            response.forEach(element => {
              this.newLabelData.push(element.year)
              // NEWREALDATA must be converted to a number
              //create utility method
              this.newRealData.push(parseInt(element.value))
              // this.numberArray = this.newRealData.map(Number);
            });
              debugger
              this.RenderChart(this.newLabelData, this.newRealData, 'bar', 'barchart');
            }
      })
  }

  RenderChart(labelData:any, mainData:any, type: any, id:any) {
    debugger
    const myChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [{
          label: 'Acres',
          data: mainData,
          backgroundColor: 'green',
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

  ngOnDestroy(): void {

  }

}

// usdaDataWithParams$?: Observable<Datum[]>;

// //charts
// data: any = [];
// datesArray: string[] = [];
// usefulArray: Datum[] = [];
// arr:number[] = [1,2,3];

// //2nd chart attempt
// chartData: any;
// labelData: any[] = [];
// realData: any[] = [];
// colorData: any[] = [];

// async loadDataWithParamsOld (selectedMetric:string, selectedCommodity:string, selectedYear:string) {
  //   console.log(selectedMetric, selectedCommodity, selectedYear);
    
  //   this.newUsdaData$ = this.http.get<Datum[]>
  //     (`$https://localhost:7281/api/UsdaInfo?Metric={selectedMetric}&Commodity={selectedCommodity}&Year={selectedYear}`)
  //     .subscribe(result => {
  //       this.newChartData = result;
  //       if(this.newChartData != null) {
  //         for(let i=0; i < this.chartData.length; i++) {
  //           this.newLabelData.push(this.chartData[i].year)
  //           this.newRealData.push(this.chartData[i].amount)
  //         }
  //         this.RenderChart(this.labelData, this.realData, 'bar', 'barchart');
  //         console.log(selectedCommodity, selectedMetric, selectedYear)
  //         console.log('NewLabelData:' + this.newLabelData)
  //       }
  //     },
  //   error => {
  //     console.log(error)
  //   });

  //   if(this.newUsdaData$ != null) {
  //       this.RenderChart(this.newChartData, this.newLabelData, 'bar', 'barchart');
  //   }
  // };


  // this.usdaData$ = this.usdaService.getAllUsdaDataNoParams();
  //   console.log(this.usdaData$);

  //   const mappedArr = this.arr.map(value => value + 1)
  //   console.log(mappedArr);
  //   const filteredArr = this.arr.filter(v => v % 2 === 0);
  //   console.log(filteredArr);

  //   this.usdaData$.subscribe(result => {
  //     this.chartData = result;
  //     if(this.chartData != null) {
  //       for(let i = 0; i < this.chartData.length; i++) {
  //         this.labelData.push(this.chartData[i].year)
  //         this.realData.push(this.chartData[i].value)
  //       }
  //       // this.RenderChart(this.labelData, this.realData, 'bar', 'barchart');
  //     }
  //   })