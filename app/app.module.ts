import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular';

import { AppComponent } from "./app.component";
import { appRoutes } from './app.route';
import { CoursesModule } from './courses';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { ThreeDeeTouch } from "nativescript-3dtouch";
import { Router } from '@angular/router';
const threeDeeTouch = new ThreeDeeTouch();

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
    constructor(private router: Router) {
        threeDeeTouch.setQuickActionCallback((shortcutItem) => {
            console.log(`app was launched by shortcut type '${shortcutItem.type}' with title '${shortcutItem.localizedTitle}'`);
            if (shortcutItem.type === "learnTouch") {
                setTimeout(() => this.router.navigate(["/3dtouch"]));
            }
        });
    }
}
