import { NgModule } from '@angular/core';

import { FontIconComponent } from './font-icon.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { SharedModule } from '../../shared';

const appRoutes = [
    {
        path: 'font-icon',
        children: [
            {
                path: "",
                component: FontIconComponent
            },
        ]

    }];

@NgModule({
    declarations: [
        FontIconComponent,
    ],
    imports: [
        NativeScriptRouterModule.forRoot(appRoutes),
        SharedModule
    ]
})
export class FontIconModule {
}
