import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { OEEService} from '../../Service/app/oee.service';
import { Routes, RouterModule } from '@angular/router';

import { AvailRoutingModule } from './avail-routing.module';
import { AvailComponent } from './avail.component';
import { ExcelService} from '../../Service/app/excel.service';
import { DatePipe } from '@angular/common';

const routes: Routes = [{ path: '', component: AvailComponent }];

@NgModule({
  declarations: [AvailComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule],
    providers:[OEEService,ExcelService,DatePipe],
}) 
export class AvailModule { }
