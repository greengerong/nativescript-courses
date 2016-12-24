import { Component, OnInit } from '@angular/core';
import { ThreeDeeTouch } from "nativescript-3dtouch";

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
            if (available) {
                console.log("This device is 3D Touch capable");
            } else {
                console.log("No 3D Touch capability, ask the user to upgrade");
            }
        });
    }

}