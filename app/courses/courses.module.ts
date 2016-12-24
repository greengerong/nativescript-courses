import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular';


import { SharedModule } from '../shared';
import { StroageModule } from './stroage';
import { AnimationsModule } from './animations';
import { CoursesComponent } from './courses.component';
import { TreeDTouchModule } from './3dtouch';

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
        StroageModule,
        AnimationsModule,
        TreeDTouchModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CoursesModule {
}
