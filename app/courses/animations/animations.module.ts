import { NgModule } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from 'nativescript-angular';

import { AnimationsCoursesComponent } from './animations.component';
import { ViewAnimationsComponent } from './view-animations';
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
            }
        ]
    }];

@NgModule({
    declarations: [
        AnimationsCoursesComponent,
        ViewAnimationsComponent
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
