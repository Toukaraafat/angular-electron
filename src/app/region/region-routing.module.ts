import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region.component'; // Import RegionComponent for routing

// Define routes for the RegionModule
const routes: Routes = [
  { path: '', component: RegionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configure the routes using forChild (lazy-loaded module)
  exports: [RouterModule], // Export RouterModule for use in RegionModule
})
export class RegionRoutingModule { }
