import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { ProcessService} from  '../../Service/app/process.service';
import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent,Edit,Add } from './process.component';
import { ExcelService} from '../../Service/app/excel.service';


@NgModule({
  declarations: [ProcessComponent,Edit,Add],
  imports: [
    CommonModule,SharedModule,
    ProcessRoutingModule
  ],
  entryComponents:[Edit,Add],
  providers:[ProcessService,ExcelService]
})
export class ProcessModule { }
