import { Routes } from "@angular/router";
import { AppLayoutComponent } from "./app-layout/app-layout.component";
import { CreateCompetitionComponent } from "./competition/create-competition/create-competition.component";
import { ShowCompetitionComponent } from "./competition/show-competition/show-competition.component";
import { CreateLanguageComponent } from "./language/create-language/create-language.component";
import { ShowLanguageComponent } from "./language/show-language/show-language.component";

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
            }
        ]
    }
]