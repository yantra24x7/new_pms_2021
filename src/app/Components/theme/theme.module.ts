import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';

import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme.component';


@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,SharedModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
