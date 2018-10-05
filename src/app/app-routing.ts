import { Routes } from "@angular/router";
import { AppLayoutComponent } from "./app-layout/app-layout.component";
import { CreateCompetitionComponent } from "./competition/create-competition/create-competition.component";
import { ShowCompetitionComponent } from "./competition/show-competition/show-competition.component";

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
            }
        ]
    }
]