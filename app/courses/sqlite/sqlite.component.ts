import { Component, OnInit } from "@angular/core";
const Sqlite = require('nativescript-sqlite');

@Component({
    selector: "my-app",
    templateUrl: 'courses/sqlite/sqlite.component.html',
    styleUrls: ['courses/sqlite/sqlite.component.css']
})
export class SqliteComponent implements OnInit {
    persons: any[] = [];
    model: any = {};
    db: any;

    ngOnInit(): void {
        new Sqlite('person_db').then(db => {
            db.execSQL('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age TEXT)')
                .then(() => {
                    this.db = db;
                    console.log("create table person success");
                    this.fetchPersons();
                }, (err) => {
                    console.error("create table person error", err);
                });
        });
    }

    addPerson() {
        console.log("data model is", this.model);
        this.db.execSQL('INSERT INTO persons (name, age) VALUES (?, ?)', [this.model.name, this.model.age])
            .then((id) => {
                console.log("insert person success with id:", id);
                this.model.id = id;
                this.persons.push({ id, name: this.model.name, age: this.model.age });
                this.model = {};
            }, (err) => {
                console.error("insert person error", err);
            });
    }

    fetchPersons() {
        this.db.all('SELECT id, name, age FROM persons')
            .then(rows => {
                console.log("get rows", rows);
                return rows.map(function (row) {
                    return {
                        id: row[0],
                        name: row[1],
                        age: row[2],
                    }
                })
            })
            .then((result) => {
                this.persons = result;
            }, (err) => {
                console.error("insert person error", err);
            })
    }

}
