import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { faker } from '@faker-js/faker'

import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Plant } from '../plant'
import { PlantComponent } from './plant.component'
import { PlantService } from './plant.service'
import { AppComponent } from 'src/app/app.component'

describe('DirectorListComponent', () => {
  let component: PlantComponent
  let fixture: ComponentFixture<PlantComponent>
  let debug: DebugElement
  let plantAmount: number

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, PlantComponent],
      providers: [PlantService]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent)
    component = fixture.componentInstance
    plantAmount = faker.number.int({ min: 5, max: 20 })
    const fakeType = ['Exterior', 'Interior']
    const fakeplants = Array(plantAmount)
      .fill(0)
      .map(
        () =>
          new Plant(
            faker.number.int(),
            faker.lorem.words(),
            faker.lorem.words(),
            fakeType[faker.number.int({ min: 0, max: 1 })],
            faker.number.int(),
            faker.lorem.word(),
            faker.lorem.words()
          )
      )
    component.plants = fakeplants

    fixture.detectChanges()
    debug = fixture.debugElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Component has X amount of plants', () => {
    expect(debug.query(By.css('#plantList')).childNodes.length -1).toBe(
      plantAmount
    )
  })
})
