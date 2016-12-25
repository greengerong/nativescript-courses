import { Component, OnInit } from '@angular/core';
import { FontIcon } from '../../core';

@Component({
    selector: 'font-icon',
    templateUrl: 'courses/font-icon/font-icon.component.html',
    styleUrls: ['courses/font-icon/font-icon.component.css']
})
export class FontIconComponent implements OnInit {
    icons = [];

    constructor(private fontIcon: FontIcon) {

    }

    ngOnInit() {
        this.icons = this.fontIcon.getAllIcon();
    }

}