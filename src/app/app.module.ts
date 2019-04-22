import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { PlatformService, ClientPlatformService } from './shared/platform.service';

@NgModule({
   imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      HttpClientModule,

      // BrowserTransferStateModule,
      TransferHttpCacheModule,


      RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules})
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      ErrorComponent
   ],
   providers: [
    { provide: PlatformService, useClass: ClientPlatformService }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

