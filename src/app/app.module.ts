import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // For ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SoftwareComponent } from './software/software.component';
import { ClientComponent } from './client/client.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgMarqueeModule } from 'ng-marquee';
import { NavbarComponent } from './navbar/navbar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AdminComponent } from './admin_panel/admin/admin.component';
import { CmpaboutComponent } from './admin_panel/cmpabout/cmpabout.component';
import { CmpserviceComponent } from './admin_panel/cmpservice/cmpservice.component';
import { CmpsoftwareComponent } from './admin_panel/cmpsoftware/cmpsoftware.component';
import { CmpclientComponent } from './admin_panel/cmpclient/cmpclient.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    SoftwareComponent,
    ClientComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    AdminComponent,
    CmpaboutComponent,
    CmpserviceComponent,
    CmpsoftwareComponent,
    CmpclientComponent,
    
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgMarqueeModule, 
    FormsModule ,// Import FormsModule
    GoogleMapsModule
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
