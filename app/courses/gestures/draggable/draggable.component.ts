import { Component, ViewChild, ElementRef } from '@angular/core';
import { AbsoluteLayout } from 'ui/layouts/absolute-layout';
import { Label } from 'ui/label';
import { TouchGestureEventData } from 'ui/gestures';

@Component({
    selector: 'draggable',
    templateUrl: 'courses/gestures/draggable/draggable.component.html',
    styleUrls: ['courses/gestures/draggable/draggable.component.css']
})
export class DraggableComponent {

    @ViewChild("draggable")
    draggable: ElementRef;

    dragChange(arg: TouchGestureEventData) {
        console.log(`Touch move event with x=${arg.getX()}; y=${arg.getY()}.`);
        let label: Label = this.draggable.nativeElement;
        AbsoluteLayout.setLeft(label, arg.getX() - 50);
        AbsoluteLayout.setTop(label, arg.getY() - 50);
    }
}