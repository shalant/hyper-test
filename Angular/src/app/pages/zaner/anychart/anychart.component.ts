import { Component, Input, OnInit, ViewChild } from '@angular/core';
import "anychart";

@Component({
  selector: 'app-anychart',
  standalone: true,
  imports: [],
  templateUrl: './anychart.component.html',
  styleUrl: './anychart.component.scss'
})

export class AnychartComponent {
  // anychart: any = '' | undefined;

  // this.anychart.onDocumentReady(function() {
  //   // create map
  //   var map = anychart.map();
  // })
}
  // anychart.onDocumentReady(function () {
  //   // create an instance of a pie chart
  //   var chart = anychart.pie();
  //   // set the data
  //   chart.data([
  //     ["Chocolate", 5],
  //     ["Rhubarb compote", 2],
  //     ["Crêpe Suzette", 2],
  //     ["American blueberry", 2],
  //     ["Buttermilk", 1]
  //   ]);
  //   // set chart title
  //   chart.title("Top 5 pancake fillings");
  //   // set the container element 
  //   chart.container("container");
  //   // initiate chart display
  //   chart.draw();
  // });



  // @ViewChild('chartContainer') container: any;
  // @Input() inputData: [] | undefined;
  
  // chart: anychart.charts.Cartesian = null;
  // anychart: any;

  // constructor() {}

  // ngOnInit() {
  //   // Default data set mapping, hardcoded here.
  //   // this.chart = this.anychart.pie(this.dataService_.getData('data1'));

  //   this.chart = this.anychart.column();

  //   //create a colum series and set the data
  //   var series = this.chart.column(this.inputData)

  //   // set the container id
  //   this.chart.container("chartContainer");

  //   // initiate drawing the chart
  //   this.chart.draw();

  // }

