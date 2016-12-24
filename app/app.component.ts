import { Component, OnInit } from "@angular/core";

import { ThreeDeeTouch } from "nativescript-3dtouch";
import { Router } from '@angular/router';

const threeDeeTouch = new ThreeDeeTouch();

@Component({
    selector: "my-app",
    template: `<page-router-outlet></page-router-outlet>`,
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit(): void {

        threeDeeTouch.setQuickActionCallback((shortcutItem) => {
            console.log(`app was launched by shortcut type '${shortcutItem.type}' with title '${shortcutItem.localizedTitle}'`);

            if (shortcutItem.type === "learnTouch") {
                this.router.navigate(["/3dtouch"])
            }
        });

    }

}
