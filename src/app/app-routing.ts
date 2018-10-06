import { Routes } from "@angular/router";
import { AppLayoutComponent } from "./app-layout/app-layout.component";
import { CreateCompetitionComponent } from "./competition/create-competition/create-competition.component";
import { ShowCompetitionComponent } from "./competition/show-competition/show-competition.component";
import { CreateLanguageComponent } from "./language/create-language/create-language.component";
import { ShowLanguageComponent } from "./language/show-language/show-language.component";
import { CreateTrainingComponent } from "./training/create-training/create-training.component";
import { ShowTrainingComponent } from "./training/show-training/show-training.component";
import { CreatePositionComponent } from "./position/create-position/create-position.component";
import { ShowPositionComponent } from "./position/show-position/show-position.component";

export const AppRoutes: Routes = [
    {
        path:'employee',
        component: AppLayoutComponent,
        children: [{
                path:'competition/create',
                component: CreateCompetitionComponent
            },
            {
                path:'competition/show',
                component: ShowCompetitionComponent
            },
            {
                path:'language/create',
                component: CreateLanguageComponent
            },
            {
                path:'language/show',
                component: ShowLanguageComponent
            },
            {
                path:'training/create',
                component: CreateTrainingComponent
            },
            {
                path:'training/show',
                component: ShowTrainingComponent
            },
            {
                path:'position/create',
                component: CreatePositionComponent
            },
            {
                path:'position/show',
                component: ShowPositionComponent
            }
        ]
    }
]