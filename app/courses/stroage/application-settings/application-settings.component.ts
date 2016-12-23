import { Component, OnInit } from "@angular/core";
import * as applicationSettings from 'application-settings';

@Component({
    selector: "application-settings",
    templateUrl: 'courses/stroage/application-settings/application-settings.component.html',
    styleUrls: ['courses/stroage/application-settings/application-settings.component.css']
})
export class ApplicationSettingsComponent implements OnInit {
    static PERSON_STORAGE_KEY = "persons";
    persons: any[] = [];
    model: any = {};

    ngOnInit(): void {
        this.fetchPersons();
    }

    addPerson() {
        if (!this.model.name) {
            return;
        }

        this.model.id = this.guid();
        console.log("data model is", JSON.stringify(this.model));
        this.persons.push(this.model);
        applicationSettings.setString(ApplicationSettingsComponent.PERSON_STORAGE_KEY, JSON.stringify(this.persons));
        console.log("insert person success.");
    }

    fetchPersons() {
        this.persons = JSON.parse(applicationSettings.getString(ApplicationSettingsComponent.PERSON_STORAGE_KEY, "[]"));
        console.log("fetch persons", JSON.stringify(this.persons));
    }

    removePerson(id) {
        console.log("delete person with id ", id);
        this.persons = this.persons.filter(t => t.id !== id);
        applicationSettings.setString(ApplicationSettingsComponent.PERSON_STORAGE_KEY, JSON.stringify(this.persons));
        console.log(`delete person[${id}] success.`);
    }

    guid(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}
