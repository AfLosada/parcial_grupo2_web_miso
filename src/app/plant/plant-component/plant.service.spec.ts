/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { PlantService } from './plant.service'
import { HttpClientModule } from '@angular/common/http'

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlantService]
    })
  })

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy()
  }))
})
