import { NgModule } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule } from 'nativescript-angular';
import { CoursesListComponent } from './courses-list';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
    ],
    declarations: [
        CoursesListComponent
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        CoursesListComponent
    ]
})
export class SharedModule {

}

