import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular';


import { SharedModule } from '../shared';
import { StroageModule } from './stroage';
import { CoursesComponent } from './courses.component';

const appRoutes = [
    {
        path: "courses",
        component: CoursesComponent,
    },
];


@NgModule({
    declarations: [
        CoursesComponent
    ],
    imports: [
        SharedModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        StroageModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CoursesModule {
}
