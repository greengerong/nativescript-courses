"use strict";
var courses_1 = require('./courses');
exports.appRoutes = [
    {
        path: "",
        redirectTo: "/courses/sqlite",
        pathMatch: "full",
    },
    {
        path: "courses",
        children: [
            {
                path: "sqlite",
                component: courses_1.SqliteComponent
            }
        ]
    }
];
//# sourceMappingURL=app.route.js.map