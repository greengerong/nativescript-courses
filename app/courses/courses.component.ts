import { Component } from "@angular/core";

@Component({
    selector: "courses-overview",
    template: '<courses-list [courses]="courses" [title]="title"></courses-list>',
})
export class CoursesComponent {
    title = '案例';
    courses = [
        {
            title: 'Stroage',
            link: '/stroage'
        },
        {
            title: 'Animations',
            link: '/animations'
        },
        {
            title: 'IOS 3D Touch',
            link: '/3dtouch'
        },
        {
            title: 'Gestures',
            link: '/gestures'
        }
    ];
}
