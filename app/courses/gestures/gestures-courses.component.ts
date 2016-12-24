import { Component } from "@angular/core";

@Component({
    selector: "gestures-courses",
    template: '<courses-list [courses]="courses" [title]="title"></courses-list>',
})
export class GesturesCoursesComponent {
    title = 'Gestures';
    courses = [
        {
            title: 'Touch - Draggable',
            link: '/gestures/draggable'
        }
    ];

}
