import { NgModule } from '@angular/core';

import { DraggableComponent } from './draggable.component';
import { SharedModule } from '../../shared';
import { NativeScriptRouterModule } from 'nativescript-angular';

const appRoutes = [
    {
        path: 'draggable',
        children: [
            {
                path: "",
                component: DraggableComponent
            },
        ]
    }];


@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forRoot(appRoutes),
    ],
    declarations: [
        DraggableComponent
    ],
})
export class DraggableModule {
}
