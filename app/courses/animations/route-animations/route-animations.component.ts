import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'view-animations',
    templateUrl: 'courses/animations/route-animations/route-animations.component.html',
})
export class RouteAnimationsComponent {
    animations = [
        "curl (iOS only)",
        "curlUp (iOS only)",
        "curlDown (iOS only)",
        "explode (Android Lollipop(21) and up only)",
        "fade",
        "flip (same as flipRight)",
        "flipRight",
        "flipLeft",
        "slide (same as slideLeft)",
        "slideLeft",
        "slideRight",
        "slideTop",
        "slideBottom"
    ];

    selectedIndex = 0;

    constructor(private routerExtensions: RouterExtensions) {

    }

    selectedIndexChange() {
        console.log(`You select ${this.animations[this.selectedIndex]}(${this.selectedIndex})`);
    }

    gotoPage() {
        let animation = this.animations[this.selectedIndex].split(" ")[0]; // simple mapping
        console.log(`Will go to animations list page with ${animation}`);

        this.routerExtensions.navigate(['/animations'], {
            transition: {
                name: animation,
                duration: 600,
                curve: "linear"
            }
        });
    }
}