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
import { CreatePositionComponent } from './position/create-position/create-position.component';
import { ShowPositionComponent } from './position/show-position/show-position.component';
import { PositionUpdateDrawerComponent } from './position/position-update-drawer/position-update-drawer.component';
import { LoginComponent } from './login/login.component';
import { CreateWorkExperienceComponent } from './work-experience/create-work-experience/create-work-experience.component';
import { ShowWorkExperienceComponent } from './work-experience/show-work-experience/show-work-experience.component';
import { WorkExperienceUpdateDrawerComponent } from './work-experience/work-experience-update-drawer/work-experience-update-drawer.component';
import { CreateCandidateComponent } from './candidate/create-candidate/create-candidate.component';
import { TrainingLevelPipe } from './pipes/trainingLevelPipe';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { PositionPipe } from './pipes/positionPipe';
import { ConvertCandidateComponent } from './employee/convert-candidate/convert-candidate.component';

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
    TrainingUpdateDrawerComponent,
    CreatePositionComponent,
    ShowPositionComponent,
    PositionUpdateDrawerComponent,
    LoginComponent,
    CreateWorkExperienceComponent,
    ShowWorkExperienceComponent,
    WorkExperienceUpdateDrawerComponent,
    CreateCandidateComponent,
    TrainingLevelPipe,
    PositionPipe,
    CreateEmployeeComponent,
    ConvertCandidateComponent
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
