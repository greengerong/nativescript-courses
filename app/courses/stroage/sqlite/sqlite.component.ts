import { Component, OnInit } from "@angular/core";
const Sqlite = require('nativescript-sqlite');

@Component({
    selector: "sqlite",
    templateUrl: 'courses/stroage/sqlite/sqlite.component.html',
    styleUrls: ['courses/stroage/sqlite/sqlite.component.css']
})
export class SqliteComponent implements OnInit {
    persons: any[] = [];
    model: any = {};
    db: any;

    ngOnInit(): void {
        // if (!Sqlite.exists('person.db.sqlite')) {
        //     Sqlite.copyDatabase('person.db.sqlite');
        // }

        new Sqlite('person.db.sqlite').then(db => {
            db.execSQL('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)')
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
        if (!this.model.name) {
            return;
        }
        console.log("data model is", JSON.stringify(this.model));
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
                console.log(`fetch persopn success: ${JSON.stringify(result)}`)
            }, (err) => {
                console.error("fetch person error", err);
            })
    }

    removePerson(id) {
        console.log("delete person with id ", id);
        this.db.execSQL('DELETE FROM persons where id = ?', [id])
            .then((effect) => {
                console.log(`delete person[${id}] success with effect count:`, effect);
                this.persons = this.persons.filter(item => item.id !== id);
            }, (err) => {
                console.error(`delete person[${id}] error`, err);
            });
    }

}
