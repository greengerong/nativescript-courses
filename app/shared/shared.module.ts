import { NgModule } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule } from 'nativescript-angular';
import { CoursesListComponent } from './courses-list';
import { FontIconPipe } from '../core/font-icon';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
    ],
    declarations: [
        CoursesListComponent,
        FontIconPipe
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        CoursesListComponent,
        FontIconPipe
    ]
})
export class SharedModule {

}

