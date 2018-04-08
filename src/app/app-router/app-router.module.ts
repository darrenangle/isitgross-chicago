import { FrontPageComponent } from './../components/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionDetailComponent } from './../components/inspection-detail/inspection-detail.component';

const routes: Routes = [
  {path: '', component: FrontPageComponent, pathMatch: 'full'},
  {path: 'inspection/:id', component: InspectionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
