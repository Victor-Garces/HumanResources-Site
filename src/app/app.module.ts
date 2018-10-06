import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_MODAL_CONFIG } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing';
import { CreateCompetitionComponent } from './competition/create-competition/create-competition.component';
import { CompetitionService } from '../services/competition.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowCompetitionComponent } from './competition/show-competition/show-competition.component';
import { CompetitionUpdateDrawerComponent } from './competition/competition-update-drawer/competition-update-drawer.component';
import { CreateLanguageComponent } from './language/create-language/create-language.component';
import { ShowLanguageComponent } from './language/show-language/show-language.component';
import { LanguageService } from '../services/language.service';
import { LanguageUpdateDrawerComponent } from './language/language-update-drawer/language-update-drawer.component';
import { CreateTrainingComponent } from './training/create-training/create-training.component';
import { ShowTrainingComponent } from './training/show-training/show-training.component';
import { TrainingService } from '../services/training.service';
import { TrainingUpdateDrawerComponent } from './training/training-update-drawer/training-update-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AppLayoutComponent,
    CreateCompetitionComponent,
    ShowCompetitionComponent,
    CompetitionUpdateDrawerComponent,
    CreateLanguageComponent,
    ShowLanguageComponent,
    LanguageUpdateDrawerComponent,
    CreateTrainingComponent,
    ShowTrainingComponent,
    TrainingUpdateDrawerComponent
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
  providers   : [ { provide: NZ_I18N, useValue: en_US }, 
    { provide: NZ_MODAL_CONFIG, useValue: {autoBodyPadding: true}}, 
    CompetitionService,
    LanguageService,
    TrainingService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
