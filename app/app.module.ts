import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from 'nativescript-angular';

import { AppComponent } from "./app.component";
import { appRoutes } from './app.route';
import { CoursesComponent, StroageModule } from './courses';
import { CoreModule } from './core';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        CoreModule,
        StroageModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
