import { Component, Input } from "@angular/core";
import { Link } from './Link.model';

@Component({
    selector: "courses-list",
    templateUrl: 'shared/courses-list/courses-list.component.html',
})
export class CoursesListComponent {
    @Input() courses: Link[];
    @Input() title: string;
}
