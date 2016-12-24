import { Component, OnInit } from '@angular/core';
import { ThreeDeeTouch } from "nativescript-3dtouch";
import { alert } from 'ui/dialogs'

const threeDeeTouch = new ThreeDeeTouch();

@Component({
    selector: 'three-d-touch',
    templateUrl: 'courses/3dtouch/3dtouch.component.html'
})
export class ThreeDTouchComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

    dynamic3DTouch() {
        threeDeeTouch.available().then((available) => {
            if (!available) {
                alert("No 3D Touch capability, ask the user to upgrade");
                return;
            }

            threeDeeTouch.configureQuickActions([
                {
                    type: "learnTouch",
                    title: "3DTouch(TS)",
                    subtitle: "Learn 3D Touch with NS",
                    iconTemplate: 'Eye'
                }
            ]).then(() => {
                alert("This device is 3D Touch capable. Success add action.");
            }, (errorMessage) => {
                alert(errorMessage);
            });
        });
    }

}