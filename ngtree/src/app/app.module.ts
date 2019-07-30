import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularD3TreeLibModule } from 'angular-d3-tree';
import { OrgChartModule } from 'ng2-org-chart';
import {GoogleChartsModule} from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularD3TreeLibModule,
    OrgChartModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
