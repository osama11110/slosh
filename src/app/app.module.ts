import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { tsParticles } from "tsparticles";
import {NgParticlesModule} from "ng-particles";
import { PackageService } from "./package.service";


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
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: { animation: 'login' }},
  { path: 'services', component: ServicesComponent, data: { animation: 'services' }},
  { path: 'radiology', component: RadiologyComponent, data: { animation: 'radiology'}},
  { path: 'pathology', component: PathologyComponent, data: { animation: 'pathology'}},
  { path: 'common-tests', component: CommonTestsComponent, data: { animation: 'common-tests'}},
  { path: 'chemical-pathology', component: ChemicalPathologyComponent, data: { animation: 'chemical-pathology'}},
  { path: 'haematology', component: HaematologyComponent, data: { animation: 'haematology'}},
  { path: 'microbiology', component: MicrobiologyComponent, data: { animation: 'microbiology'}},
  { path: 'cardiology', component: CardiologyComponent, data: { animation: 'cardiology'}},
  { path: 'sexual-health', component: SexualHealthComponent, data: { animation: 'sexual-health'}},
  { path: 'virology', component: VirologyComponent, data: { animation: 'virology'}},
  { path: 'allergens', component: AllergensComponent, data: { animation: 'allergens'}},
  { path: 'immunotests', component: ImmunotestsComponent, data: { animation: 'immunotests'}},
  { path: 'other-chemical-tests', component: OtherChemicalTestsComponent, data: { animation: 'other-chemical-tests'}},
  { path: 'routine-chemical-tests', component: RoutineChemicalTestsComponent, data: { animation: 'routine-chemical-tests'}},
  { path: 'urine-tests', component: UrineTestsComponent, data: { animation: 'urine-tests'}},
  { path: 'haemo-tests', component: HaemoTestsComponent, data: { animation: 'haemo-tests'}},
  { path: 'bacteriology', component: BacteriologyComponent, data: { animation: 'bacteriology'}},
  { path: 'xray', component: XrayComponent, data: { animation: 'xray'}},
  { path: 'ctscan', component: CtscanComponent, data: { animation: 'ctscan'}},
  { path: 'mri', component: MriComponent, data: { animation: 'mri'}},
  { path: 'ultrasound', component: UltrasoundComponent, data: { animation: 'ultrasound'}},
  { path: 'cart', component: CartComponent, data: { animation: 'cart'}},
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
    UltrasoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgParticlesModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
