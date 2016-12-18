"use strict";
var core_1 = require("@angular/core");
var Sqlite = require('nativescript-sqlite');
var SqliteComponent = (function () {
    function SqliteComponent() {
        this.persons = [];
        this.model = {};
    }
    SqliteComponent.prototype.ngOnInit = function () {
        var _this = this;
        new Sqlite('person_db').then(function (db) {
            db.execSQL('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age TEXT)')
                .then(function () {
                _this.db = db;
                console.log("create table person success");
                _this.fetchPersons();
            }, function (err) {
                console.error("create table person error", err);
            });
        });
    };
    SqliteComponent.prototype.addPerson = function () {
        var _this = this;
        console.log("data model is", this.model);
        this.db.execSQL('INSERT INTO persons (name, age) VALUES (?, ?)', [this.model.name, this.model.age])
            .then(function (id) {
            console.log("insert person success with id:", id);
            _this.model.id = id;
            _this.persons.push({ id: id, name: _this.model.name, age: _this.model.age });
            _this.model = {};
        }, function (err) {
            console.error("insert person error", err);
        });
    };
    SqliteComponent.prototype.fetchPersons = function () {
        var _this = this;
        this.db.all('SELECT id, name, age FROM persons')
            .then(function (rows) {
            console.log("get rows", rows);
            return rows.map(function (row) {
                return {
                    id: row[0],
                    name: row[1],
                    age: row[2],
                };
            });
        })
            .then(function (result) {
            _this.persons = result;
        }, function (err) {
            console.error("insert person error", err);
        });
    };
    SqliteComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: 'courses/sqlite/sqlite.component.html',
            styleUrls: ['courses/sqlite/sqlite.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SqliteComponent);
    return SqliteComponent;
}());
exports.SqliteComponent = SqliteComponent;
//# sourceMappingURL=sqlite.component.js.map