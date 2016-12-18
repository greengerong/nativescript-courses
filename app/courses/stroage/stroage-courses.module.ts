import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from 'nativescript-angular';

import { SqliteComponent } from './sqlite';
import { StroageCoursesComponent } from './stroage-courses.component';
import { SharedModule } from '../../shared';

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
            }
        ]
    }];

@NgModule({
    declarations: [
        SqliteComponent,
        StroageCoursesComponent
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
