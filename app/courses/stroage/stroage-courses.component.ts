import { Component } from "@angular/core";

@Component({
    selector: "stroage-courses",
    template: '<courses-list [courses]="courses" [title]="title"></courses-list>',
})
export class StroageCoursesComponent {
    title = 'Stroage';
    courses = [
        {
            title: 'Sqlite',
            link: '/stroage/sqlite'
        },
        {
            title: 'Application Settings',
            link: '/stroage/applicationSettings'
        }
    ];

}
