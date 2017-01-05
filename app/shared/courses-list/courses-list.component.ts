import { Component, Input } from "@angular/core";
import { Link } from './Link.model';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: "courses-list",
    templateUrl: 'shared/courses-list/courses-list.component.html',
})
export class CoursesListComponent {
    @Input() courses: Link[];
    @Input() hideBackAndroidButton: boolean;
    @Input() title: string;

    constructor(private routerExtensions: RouterExtensions) {

    }

    routeBack() {
        this.routerExtensions.back();
    }
}
