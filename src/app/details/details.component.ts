import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: HousingLocation | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
