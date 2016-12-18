import { Component } from "@angular/core";

@Component({
    selector: "courses-overview",
    template: '<courses-list [courses]="courses" [title]="title"></courses-list>',
})
export class CoursesComponent {
    title = '案例';
    courses = [{
        title: 'Stroage',
        link: '/stroage',
    }];
}
