import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent,editComponent } from './Nav/sidebar/sidebar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './Components/register/register.module';
import { SharedModule} from './Components/shared/shared.module';
import { NavbarService} from './Nav/navbar.service';
// import { Tokentinterceptor} from '../app/Service/core/http/tokentinterceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule} from '../app/Service/core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,editComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RegisterModule,SharedModule,
    MatToolbarModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
  entryComponents:[editComponent],

})
export class AppModule { }
