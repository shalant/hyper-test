import { Component } from '@angular/core'
import { interval } from 'rxjs'
import { ChartType, NgApexchartsModule } from 'ng-apexcharts'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { ChartOptions } from '@core/model/apexchart.model'

@Component({
  selector: 'session',
  standalone: true,
  imports: [NgApexchartsModule, NgbAlertModule],
  template: `
    <div class="card card-h-100">
      <div class="card-body">
        <ngb-alert
          class="alert alert-warning alert-dismissible fade show mb-3"
          role="alert"
        >
          Property HY1xx is not receiving hits. Either your site is not
          receiving any sessions or it is not tagged correctly.
        </ngb-alert>
        <ul class="nav float-end d-none d-lg-flex">
          <li class="nav-item">
            <a class="nav-link text-muted" href="javascript:void(0)">Today</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="javascript:void(0)">7d</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="javascript:void(0)">15d</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="javascript:void(0)">1m</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="javascript:void(0)">1y</a>
          </li>
        </ul>
        <h4 class="header-title mb-3">Sessions Overview</h4>

        <div dir="ltr">
          <div
            id="sessions-overview"
            class="apex-charts mt-3"
            data-colors="#0acf97"
          >
            <apx-chart
              [chart]="sessionsoverviewChart.chart!"
              [dataLabels]="sessionsoverviewChart.dataLabels!"
              [stroke]="sessionsoverviewChart.stroke!"
              [series]="sessionsoverviewChart.series!"
              [legend]="sessionsoverviewChart.legend!"
              [colors]="sessionsoverviewChart.colors!"
              [xaxis]="sessionsoverviewChart.xaxis!"
              [yaxis]="sessionsoverviewChart.yaxis!"
              [fill]="sessionsoverviewChart.fill!"
            ></apx-chart>
          </div>
        </div>
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class SessionComponent {
  stateData = [
    {
      label: 'Active Users',
      amount: 121,
      icon: 'uil-users-alt',
      arricon: 'mdi-arrow-up-bold',
      percentage: '5.27',
      badgecolor: 'success',
      sinceText: 'Since last month',
    },
    {
      label: 'Views per minute',
      amount: 560,
      icon: 'uil-window-restore',
      arricon: 'mdi-arrow-down-bold',
      percentage: '1.08',
      badgecolor: 'danger',
      sinceText: 'Since previous week',
    },
  ]

  ngOnInit(): void {
    interval(2000).subscribe(() => {
      for (var i = 0; i < this.stateData.length; i++) {
        // Get a random number
        const amount: number = this.stateData[i].amount
        var number = Math.floor(Math.random() * amount + 200)
        this.stateData[i].amount = parseFloat(number.toFixed(0))
      }
    })
  }

  getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1)
    var days = []
    var idx = 0
    while (date.getMonth() === month && idx < 15) {
      var d = new Date(date)
      days.push(
        d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' })
      )
      date.setDate(date.getDate() + 1)
      idx += 1
    }
    return days
  }

  labels = this.getDaysInMonth(
    new Date().getMonth() + 1,
    new Date().getFullYear()
  )
  sessionsoverviewChart: Partial<ChartOptions> = {
    chart: {
      height: 309,
      type: 'area' as ChartType,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as 'smooth',
      width: 4,
    },
    series: [
      {
        name: 'Sessions',
        data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
      },
    ],
    legend: {
      show: false,
    },
    colors: ['#0acf97'],
    xaxis: {
      type: 'string' as 'category',
      categories: this.labels,
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + 'k'
        },
        offsetX: -15,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
  }
}
