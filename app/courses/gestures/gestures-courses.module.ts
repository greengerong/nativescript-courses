import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular';

import { DraggableComponent } from './draggable';
import { GesturesCoursesComponent } from './gestures-courses.component';
import { SharedModule } from '../../shared';

const appRoutes = [
    {
        path: 'gestures',
        children: [
            {
                path: "",
                component: GesturesCoursesComponent
            },
            {
                path: "draggable",
                component: DraggableComponent
            },
        ]
    }];

@NgModule({
    declarations: [
        GesturesCoursesComponent,
        DraggableComponent,
    ],
    imports: [
        NativeScriptRouterModule.forRoot(appRoutes),
        SharedModule
    ]
})
export class GesturesCoursesModule {
}
