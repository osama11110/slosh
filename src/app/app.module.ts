import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { tsParticles } from "tsparticles";
import {NgParticlesModule} from "ng-particles";


import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RadiologyComponent } from './radiology/radiology.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PathologyComponent } from './pathology/pathology.component';
import { CommonTestsComponent } from './common-tests/common-tests.component';
import { ChemicalPathologyComponent } from './chemical-pathology/chemical-pathology.component';
import { HaematologyComponent } from './haematology/haematology.component';
import { MicrobiologyComponent } from './microbiology/microbiology.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { SexualHealthComponent } from './sexual-health/sexual-health.component';
import { VirologyComponent } from './virology/virology.component';
import { AllergensComponent } from './allergens/allergens.component';
import { ImmunotestsComponent } from './immunotests/immunotests.component';
import { OtherChemicalTestsComponent } from './other-chemical-tests/other-chemical-tests.component';
import { RoutineChemicalTestsComponent } from './routine-chemical-tests/routine-chemical-tests.component';
import { UrineTestsComponent } from './urine-tests/urine-tests.component';
import { HaemoTestsComponent } from './haemo-tests/haemo-tests.component';
import { BacteriologyComponent } from './bacteriology/bacteriology.component';
import { XrayComponent } from './xray/xray.component';
import { CtscanComponent } from './ctscan/ctscan.component';
import { MriComponent } from './mri/mri.component';
import { UltrasoundComponent } from './ultrasound/ultrasound.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'radiology', component: RadiologyComponent},
  { path: 'pathology', component: PathologyComponent},
  { path: 'common-tests', component: CommonTestsComponent},
  { path: 'chemical-pathology', component: ChemicalPathologyComponent},
  { path: 'haematology', component: HaematologyComponent},
  { path: 'microbiology', component: MicrobiologyComponent},
  { path: 'cardiology', component: CardiologyComponent},
  { path: 'sexual-health', component: SexualHealthComponent},
  { path: 'virology', component: VirologyComponent},
  { path: 'allergens', component: AllergensComponent},
  { path: 'immunotests', component: ImmunotestsComponent},
  { path: 'other-chemical-tests', component: OtherChemicalTestsComponent},
  { path: 'routine-chemical-tests', component: RoutineChemicalTestsComponent},
  { path: 'urine-tests', component: UrineTestsComponent},
  { path: 'haemo-tests', component: HaemoTestsComponent},
  { path: 'bacteriology', component: BacteriologyComponent},
  { path: 'xray', component: XrayComponent},
  { path: 'ctscan', component: CtscanComponent},
  { path: 'mri', component: MriComponent},
  { path: 'ultrasound', component: UltrasoundComponent},
  { path: '', redirectTo:'/login', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    RadiologyComponent,
    ServicesComponent,
    LoginComponent,
    NavbarComponent,
    PathologyComponent,
    CommonTestsComponent,
    ChemicalPathologyComponent,
    HaematologyComponent,
    MicrobiologyComponent,
    CardiologyComponent,
    SexualHealthComponent,
    VirologyComponent,
    AllergensComponent,
    ImmunotestsComponent,
    OtherChemicalTestsComponent,
    RoutineChemicalTestsComponent,
    UrineTestsComponent,
    HaemoTestsComponent,
    BacteriologyComponent,
    XrayComponent,
    CtscanComponent,
    MriComponent,
    UltrasoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgParticlesModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
