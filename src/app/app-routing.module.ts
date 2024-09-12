import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SoftwareComponent } from './software/software.component';
import { ClientComponent } from './client/client.component';
import { AboutComponent } from './about/about.component';
import { CmpsoftwareComponent } from './admin_panel/cmpsoftware/cmpsoftware.component';



const routes: Routes = [
  { path: '', redirectTo: '#home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'client', component: ClientComponent },
  { path: 'about', component: AboutComponent },
  {path:'cmpsoftware',component:CmpsoftwareComponent},
  { path: '**', redirectTo: '#home' } // Wildcard route

];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],  // Adjust offset if necessary
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
