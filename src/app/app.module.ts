import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing';
import { CreateCompetitionComponent } from './competition/create-competition/create-competition.component';
import { CompetitionService } from '../services/competition.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowCompetitionComponent } from './competition/show-competition/show-competition.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AppLayoutComponent,
    CreateCompetitionComponent,
    ShowCompetitionComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: en_US }, CompetitionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
