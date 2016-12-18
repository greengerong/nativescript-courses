import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from 'nativescript-angular';

import { AppComponent } from "./app.component";
import { appRoutes } from './app.route';
import { SqliteComponent, CoursesComponent } from './courses';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        SqliteComponent
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
