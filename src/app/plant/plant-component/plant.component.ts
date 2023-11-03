import { Component, OnInit } from '@angular/core'
import { Plant } from '../plant'
import { PlantService } from './plant.service'

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plants!: Array<Plant>

  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.getPlants()
  }

  getPlants() {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants
    })
  }

  getInteriorPlants() {
    return this.plants.filter(plant => plant.tipo === 'Interior')
  }
  
  getExteriorPlants() {
    return this.plants.filter(plant => plant.tipo === 'Exterior')
  }

}
