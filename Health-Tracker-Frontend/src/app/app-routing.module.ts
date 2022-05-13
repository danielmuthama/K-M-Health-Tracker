import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './forms/data-form/data-form.component';
import { DisplayFormComponent } from './forms/display-form/display-form.component';
import { LabDisplayFormsComponent } from './forms/lab-display-forms/lab-display-forms.component';
import { UpdateFormComponent } from './forms/update-form/update-form.component';
import { HomeComponent } from './home/home.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { LoginMoringaComponent } from './login/login-moringa/login-moringa.component';
import { LoginMoringaAdminComponent } from './login/login-moringa-admin/login-moringa-admin.component';
import { LoginKemriAdminComponent } from './login/login-kemri-admin/login-kemri-admin.component';
import { LoginKemriComponent } from './login/login-kemri/login-kemri.component';
import { KemriComponent } from './Admin-Dashboard/kemri/kemri.component';
import { MoringaComponent } from './Admin-Dashboard/moringa/moringa.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat-box/chat/chat.component';
import { ChartComponent } from './charts/chart/chart.component';
import { MapComponent } from './driver/map/map.component';
import { MoringaRegisterComponent } from './register/moringa-register/moringa-register.component';
import { KemriRegisterComponent } from './register/kemri-register/kemri-register.component';
import { DriverRegisterComponent } from './register/driver-register/driver-register.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login", component:LoginMoringaAdminComponent},
  {path:"about", component: AboutComponent},
  {path:"data", component:MoringaComponent},
  // Moringa Routes
  {path:"moringaAdmin",component:LoginMoringaAdminComponent},
  {path:"moringaAdmin/data",component:MoringaComponent},
  {path:"moringaAdmin/data/register",component:MoringaRegisterComponent},
  {path:"moringaAdmin/data/chart",component:ChartComponent},
  {path:"moringaStaff",component:LoginMoringaComponent},
  {path:"moringaStaff/data", component: DisplayFormComponent },
  {path:"moringaStaff/data/add", component: DataFormComponent },
  {path:"update/:id", component:UpdateFormComponent },
  // Kemri Routes
  {path:"kemriAdmin",component:LoginKemriAdminComponent},
  {path:"kemriAdmin/lab",component:KemriComponent},
  {path:"kemriAdmin/lab/register",component:KemriRegisterComponent},
  {path:"kemriAdmin/lab/chart",component:ChartComponent},
  {path:"kemriStaff",component:LoginKemriComponent},
  {path:"kemriStaff/lab", component: LabDisplayFormsComponent },
  {path:"data/:id", component: DisplayFormComponent },
  {path:"lab", component: LabDisplayFormsComponent },
  // Driver Routes
  {path:"driver",component:DriverComponent},
  {path:"driverLogin",component:LoginDriverComponent},
  {path:"driver/map",component:MapComponent},
  {path:"moringaAdmin/data/driver/register",component:DriverRegisterComponent},
  // {path:"kemriAdmin/kemri",component:KemriComponent},
  // {path:"chat",component:ChatComponent},
  // {path:"lab/chart",component:ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
