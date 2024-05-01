import { Component } from '@angular/core';
import { Error404Component } from "../../../extrapage/404/404.component";
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Datum } from '../models/usdainfo.model';
import { UsdaServiceService } from '../services/usda-service.service';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-usda-data-by-state',
    standalone: true,
    templateUrl: './usda-data-by-state.component.html',
    styleUrl: './usda-data-by-state.component.scss',
    imports: [
      CommonModule,
      Error404Component
    ]
})
export class UsdaDataByStateComponent {
  newUsdaData$?: Observable<Datum[]>;
  isValidQuery: boolean = true;

  selectedState: string = '';
  selectedMetric: string = '';
  selectedCommodity: string = '';
  selectedYear: string = '';
  selectedShortDesc: string = '';

  myChart: any = '';
  newChartData: any;
  newLabelData: any[] = [];
  newRealData: any[] = [];
  unit: string = '';
  timeframe: string = ''

  getUsdaSubscription?: Subscription;

  constructor(private usdaService: UsdaServiceService,
    private http: HttpClient) { }

  ngOnInit(): void { }

  onSelectState(event: Event) {
    this.selectedState = (event.target as HTMLSelectElement).value;
  }

  onSelectCommodity(event: Event) {
    this.selectedCommodity = (event.target as HTMLSelectElement).value;
  }
  
  onSelectMetric(event: Event) {
    // debugger
    this.selectedMetric = (event.target as HTMLSelectElement).value;
    switch (this.selectedMetric) {
      case 'AREA PLANTED':
        this.selectedShortDesc = `${this.selectedCommodity} - ACRES PLANTED`;
        break;
      case 'AREA HARVESTED':
        this.selectedShortDesc = `HAY - ACRES HARVESTED`;
        break;
      case 'CONDITION':
        this.selectedShortDesc = `${this.selectedCommodity} - CONDITION, MEASURED IN PCT EXCELLENT`;
        break;
      case 'ETHANOL USAGE':
        this.selectedShortDesc = `CORN, FOR FUEL ALCOHOL - USAGE, MEASURED IN BU`;
        break;
      case 'PRODUCTION':
        if (this.selectedCommodity == 'CORN') {
          this.selectedShortDesc = `CORN, GRAIN - PRODUCTION, MEASURED IN BU`;
        }
        else {
          this.selectedShortDesc = `SOYBEANS - PRODUCTION, MEASURED IN BU`;
        }
        break;
      case 'PROGRESS':
        this.selectedShortDesc = `${this.selectedCommodity} - PROGRESS, MEASURED IN PCT EMERGED`;
        break;
      case 'RESIDUAL USAGE':
        this.selectedShortDesc = `CORN, FOR OTHER PRODUCTS (EXCL ALCOHOL) - USAGE, MEASURED IN BU`;
        break;
      case 'STOCKS':
        if (this.selectedCommodity == 'CORN') {
          this.selectedShortDesc = `CORN, GRAIN - STOCKS, MEASURED IN BU`;
        }
        else {
          this.selectedShortDesc = 'SOYBEANS - STOCKS, MEASURED IN BU';
        }
        break;
      default:
        break;
    }
    if (this.selectedMetric == 'PROGRESS') {
      this.selectedShortDesc = `${this.selectedCommodity} - PROGRESS, MEASURED IN PCT EMERGED`;
    }
  }
  
  onSelectYear(event: Event) {
    this.selectedYear = (event.target as HTMLSelectElement).value;
  }

  loadDataWithParams(selectedMetric: string, selectedCommodity: string, selectedYear: string, selectedShortDesc: string): void {
    if (selectedMetric == 'RESIDUAL USAGE' && selectedCommodity == 'SOYBEANS' || selectedMetric == 'ETHANOL USAGE' && selectedCommodity == 'SOYBEANS') {
      // TODO - display a pretty error display
      this.isValidQuery = false;
    }

    if (this.myChart !== '') {
      this.myChart.destroy();
    }
    console.log(selectedMetric, selectedCommodity, selectedYear);
    // console.log(`https://localhost:7281/api/UsdaInfo?Metric=${selectedMetric}&Commodity=${selectedCommodity}&Year=${selectedYear}&short_desc=${this.selectedShortDesc}`)

    if (this.isValidQuery) {
      this.newUsdaData$ = this.http.get<Datum[]>(`https://localhost:7281/api/GetByState?Metric=${selectedMetric}&Commodity=${selectedCommodity}&Year=${selectedYear}&short_desc=${this.selectedShortDesc}&stateAlpha=${this.selectedState}`)

      debugger;
      this.getUsdaSubscription = this.newUsdaData$
        .subscribe({
          next: (response) => {
            debugger;
            response.forEach(element => {
              if (element.reference_period_desc !== null) {
                this.newLabelData.push(element.county_name)
              }
              else {
                this.newLabelData.push(element.year)
              }
              this.newRealData.push(parseInt(element.value))
              this.unit = response[0].unit_desc;
            });
            debugger
            this.RenderChart(this.newLabelData, this.newRealData, 'bar', 'barchart');
          }
        })

    }
  }

  RenderChart(labelData: any, mainData: any, type: any, id: any) {
    debugger
    this.myChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [{
          label: this.unit,
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
    this.getUsdaSubscription?.unsubscribe();
  }

}
