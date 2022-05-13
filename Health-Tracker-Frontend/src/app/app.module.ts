import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { ChatComponent } from './chat-box/chat/chat.component';
import { FormsComponent } from './forms/forms.component';
import { LabFormComponent } from './forms/lab-form/lab-form.component';
import { DisplayFormComponent } from './forms/display-form/display-form.component';
import { DataFormComponent } from './forms/data-form/data-form.component';
import { LoginKemriComponent } from './login/login-kemri/login-kemri.component';
import { LoginMoringaComponent } from './login/login-moringa/login-moringa.component';
import { LoginMoringaAdminComponent } from './login/login-moringa-admin/login-moringa-admin.component';
import { LoginKemriAdminComponent } from './login/login-kemri-admin/login-kemri-admin.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { NavbarComponent } from './navigation-bar/navbar/navbar.component';
import { LabDisplayFormsComponent } from './forms/lab-display-forms/lab-display-forms.component';
import { UpdateFormComponent } from './forms/update-form/update-form.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { KemriComponent } from './Admin-Dashboard/kemri/kemri.component';
import { MoringaComponent } from './Admin-Dashboard/moringa/moringa.component';
import { ChartComponent } from './charts/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { MapComponent } from './driver/map/map.component';
import { MoringaRegisterComponent } from './register/moringa-register/moringa-register.component';
import { KemriRegisterComponent } from './register/kemri-register/kemri-register.component';
import { DriverRegisterComponent } from './register/driver-register/driver-register.component';
import { DriverComponent } from './driver/driver.component';
@NgModule({
  declarations: [    
    AppComponent,
    LandingComponent,
    ChatComponent,
    FormsComponent,
    LabFormComponent,
    DisplayFormComponent,
    DataFormComponent,
    LoginKemriComponent,
    LoginMoringaComponent,
    LoginMoringaAdminComponent,
    LoginKemriAdminComponent,
    LoginDriverComponent,
    NavbarComponent,
    LabDisplayFormsComponent,
    UpdateFormComponent,
    AboutComponent,
    HomeComponent,
    KemriComponent,
    MoringaComponent,
    ChartComponent,
    MapComponent,
    MoringaRegisterComponent,
    KemriRegisterComponent,
    DriverRegisterComponent,
    DriverComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
