import { Component } from "@angular/core";

@Component({
    selector: "animations-courses",
    template: '<courses-list [courses]="courses" [title]="title"></courses-list>',
})
export class AnimationsCoursesComponent {
    title = 'Animations';
    courses = [
        {
            title: 'View Element Animations',
            link: '/animations/view'
        },
        {
            title: 'Route Animations',
            link: '/animations/route'
        }
    ];

}
