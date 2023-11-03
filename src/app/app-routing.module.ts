import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlantComponent } from './plant/plant-component/plant.component'

const routes: Routes = [
  { path: 'plant-list', component:PlantComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
