import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Label } from 'ui/label';
import { Color } from 'color';
import * as enums from "ui/enums";

@Component({
    selector: 'view-animations',
    templateUrl: 'courses/animations/view-animations/view-animations.component.html',
    styleUrls: ['courses/animations/view-animations/view-animations.component.css'],
    animations: [
        trigger("activeState", [
            state("inactive", style({
                "opacity": "0.6",
                'transform': 'scale(0.6, 0.8)'
            })),
            state("active", style({
                "opacity": "1",
                'transform': 'scale(1.0, 1.0)'
            })),
            transition("inactive => active", [animate("600ms ease-out")]),
            transition("active => inactive", [animate("600ms ease-out")]),
        ])]
})
export class ViewAnimationsComponent {

    constructor() {

    }

    chainAnimate(label: Label) {
        // >> animation-animating-properties-code
        label.animate({
            opacity: 0.75,
            backgroundColor: new Color("Blue"),
            translate: { x: 200, y: 200 },
            scale: { x: 2, y: 2 },
            rotate: 180,
            duration: 3000,
            delay: 20,
            iterations: 5,
            curve: enums.AnimationCurve.easeIn
        }).then(() => {
            console.log("Animation finished.");
        }).catch((e) => {
            console.log(e.message);
        });
        // << animation-animating-properties-code
    }

}