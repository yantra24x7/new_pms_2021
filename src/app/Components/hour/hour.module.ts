import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { OEEService} from '../../Service/app/oee.service';
import { Routes, RouterModule } from '@angular/router';
import { HourRoutingModule } from './hour-routing.module';
import { HourComponent } from './hour.component';
import { ExcelService} from '../../Service/app/excel.service';
import { DatePipe } from '@angular/common';

const routes: Routes = [{ path: '', component: HourComponent }];


@NgModule({
  declarations: [HourComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
    HourRoutingModule
  ],
  providers:[OEEService,ExcelService,DatePipe],

})
export class HourModule { }
