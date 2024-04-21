import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsdaInfo } from '../models/usdainfo.model';
import { UsdaServiceService } from '../services/usda-service.service';

@Component({
  selector: 'app-usda-data',
  standalone: true,
  imports: [],
  templateUrl: './usda-data.component.html',
  styleUrl: './usda-data.component.scss'
})

export class UsdaDataComponent implements OnInit {

  usdaData$?: Observable<UsdaInfo>;

  constructor(private usdaService: UsdaServiceService) {}

  ngOnInit(): void {
    this.usdaData$ = this.usdaService.getAllCategories();
    console.log(this.usdaData$);
  }
}
