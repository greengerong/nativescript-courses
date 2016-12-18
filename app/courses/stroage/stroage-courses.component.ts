import { Component } from "@angular/core";

@Component({
    selector: "stroage-courses",
    templateUrl: 'courses/stroage/stroage-courses.component.html',
})
export class StroageCoursesComponent {
    courses = [
        {
            title: 'Sqlite',
            link: '/stroage/sqlite'
        }
    ];

}
