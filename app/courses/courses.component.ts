import { Component } from "@angular/core";

@Component({
    selector: "courses",
    templateUrl: 'courses/courses.component.html',
})
export class CoursesComponent {
    courses = [{
        title: 'Stroage',
        link: '/stroage/sqlite',
        items: [
            {
                title: 'Sqlite',
                link: '/stroage/sqlite'
            }
        ]
    }]

}
