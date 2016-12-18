import { NgModule } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from 'nativescript-angular';

import { AnimationsCoursesComponent } from './animations.component';
import { ViewAnimationsComponent } from './view-animations';
import { RouteAnimationsComponent } from './route-animations';
import { SharedModule } from '../../shared';

const appRoutes = [
    {
        path: 'animations',
        children: [
            {
                path: "",
                component: AnimationsCoursesComponent
            },
            {
                path: "view",
                component: ViewAnimationsComponent
            },
            {
                path: "route",
                component: RouteAnimationsComponent
            }
        ]
    }];

@NgModule({
    declarations: [
        AnimationsCoursesComponent,
        ViewAnimationsComponent,
        RouteAnimationsComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        SharedModule
    ]
})
export class AnimationsModule {
}
