import { Component, Input } from '@angular/core'
import { WorldVectorMapComponent } from '@component/vector-maps/world-vector-map.component'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js' // Import world map data
import 'jsvectormap/dist/maps/us-merc-en.js'
import 'jsvectormap/dist/maps/russia.js'
import 'jsvectormap/dist/maps/canada.js'
import 'jsvectormap/dist/maps/iraq.js'
import 'jsvectormap/dist/maps/italy.js'
import 'jsvectormap/dist/maps/spain.js'
@Component({
  selector: 'app-vector',
  standalone: true,
  imports: [PagetitleComponent, WorldVectorMapComponent],
  template: `
    <app-pagetitle
      title="Vector Maps"
      subtitle="Maps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">World Vector Map</h4>
            <div id="world-map-markers" style="height: 360px">
              <app-world-vector-map
                mapId="world-map-markers"
                type="world"
                [options]="worldMapConfig"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">USA Vector Map</h4>
            <div id="usa-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="usa-map-markers"
                type="us_merc_en"
                [options]="usaMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Spain Vector Map</h4>
            <div id="spain-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="spain-map-markers"
                type="spain"
                [options]="spainMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">RUSSIA Vector Map</h4>
            <div id="russia-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="russia-map-markers"
                type="russia"
                [options]="russiaMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Canada Vector Map</h4>
            <div id="canada-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="canada-map-markers"
                type="canada"
                [options]="canadaMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Italy Vector Map</h4>
            <div id="italy-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="italy-map-markers"
                type="italy"
                [options]="italyMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Iraq Vector Map</h4>
            <div id="iraq-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="iraq-map-markers"
                type="iraq"
                [options]="iraqMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
})
export class VectorComponent {
  worldMapConfig = {
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#e3eaef',
      },
    },
    markers: [
      { coords: [41.9, 12.45], name: 'Vatican City' },
      { coords: [43.73, 7.41], name: 'Monaco' },
      { coords: [-0.52, 166.93], name: 'Nauru' },
      { coords: [-8.51, 179.21], name: 'Tuvalu' },
      { coords: [43.93, 12.46], name: 'San Marino' },
      { coords: [47.14, 9.52], name: 'Liechtenstein' },
      { coords: [7.11, 171.06], name: 'Marshall Islands' },
      { coords: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
      { coords: [3.2, 73.22], name: 'Maldives' },
      { coords: [35.88, 14.5], name: 'Malta' },
      { coords: [12.05, -61.75], name: 'Grenada' },
      { coords: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
      { coords: [13.16, -59.55], name: 'Barbados' },
      { coords: [17.11, -61.85], name: 'Antigua and Barbuda' },
      { coords: [-4.61, 55.45], name: 'Seychelles' },
      { coords: [7.35, 134.46], name: 'Palau' },
      { coords: [42.5, 1.51], name: 'Andorra' },
      { coords: [14.01, -60.98], name: 'Saint Lucia' },
      { coords: [6.91, 158.18], name: 'Federated States of Micronesia' },
      { coords: [1.3, 103.8], name: 'Singapore' },
      { coords: [0.33, 6.73], name: 'SÃ£o TomÃ© and PrÃncipe' },
    ],
    markerStyle: {
      initial: {
        r: 9,
        fill: '#727cf5',
        'fill-opacity': 0.9,
        stroke: '#fff',
        'stroke-width': 7,
        'stroke-opacity': 0.4,
      },
      hover: {
        fill: '#727cf5',
        stroke: '#fff',
        'fill-opacity': 1,
        'stroke-width': 1.5,
      },
    },
  }
  canadaMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#0acf97',
      },
    },
  }
  russiaMapConfig = {
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#727cf5',
      },
    },
  }
  usaMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#39afd1',
      },
    },
  }
  spainMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#6c757d',
      },
    },
  }

  italyMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#fa5c7c',
      },
    },
  }
  iraqMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#ffbc00',
      },
    },
  }

  ngOnInit(): void {}
}
