import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailComponent } from './avail.component';

const routes: Routes = [{ path: '', component: AvailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailRoutingModule { }
