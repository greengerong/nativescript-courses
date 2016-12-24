import { NgModule } from '@angular/core';

import { ThreeDTouchComponent } from './3dtouch.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { SharedModule } from '../../shared';

const appRoutes = [
    {
        path: '3dtouch',
        children: [
            {
                path: "",
                component: ThreeDTouchComponent
            },
        ]

    }];

@NgModule({
    declarations: [
        ThreeDTouchComponent,
    ],
    imports: [
        NativeScriptRouterModule.forRoot(appRoutes),
        SharedModule
    ]
})
export class TreeDTouchModule {
}
