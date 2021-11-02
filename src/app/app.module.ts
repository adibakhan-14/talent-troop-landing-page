import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicantInfoComponent } from './pages/applicant-info/applicant-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ExamPortalComponent } from './pages/exam-portal/exam-portal.component';
import { FeaturesComponent } from './pages/features/features.component';
import { FormComponent } from './pages/form/form.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ApplicantInfoComponent,
    AdminPanelComponent,
    ExamPortalComponent,
    FeaturesComponent,
    FormComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule, 
    SharedModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
