import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular';

import { AppComponent } from "./app.component";
import { appRoutes } from './app.route';
import { CoursesComponent, CoursesModule } from './courses';
import { CoreModule } from './core';
import { SharedModule } from './shared';

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptRouterModule.forRoot(appRoutes),
        CoreModule,
        SharedModule,
        CoursesModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
