import { NgModule } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from 'nativescript-angular';

import { SqliteComponent } from './sqlite';
import { StroageCoursesComponent } from './stroage-courses.component';
import { SharedModule } from '../../shared';
import { ApplicationSettingsComponent } from './application-settings';

const appRoutes = [
    {
        path: 'stroage',
        children: [
            {
                path: "",
                component: StroageCoursesComponent
            },
            {
                path: "sqlite",
                component: SqliteComponent
            },
            {
                path: "applicationSettings",
                component: ApplicationSettingsComponent
            }
        ]
    }];

@NgModule({
    declarations: [
        SqliteComponent,
        StroageCoursesComponent,
        ApplicationSettingsComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        SharedModule
    ]
})
export class StroageModule {
}
