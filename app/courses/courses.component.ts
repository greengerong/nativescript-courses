import { Component } from "@angular/core";

@Component({
    selector: "courses-overview",
    templateUrl: 'courses/courses.component.html',
})
export class CoursesComponent {
    courses = [{
        title: 'Stroage',
        link: '/stroage',
    }];
}
