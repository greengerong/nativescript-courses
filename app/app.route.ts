import { SqliteComponent } from './courses';
import { path } from 'file-system';


export const appRoutes = [
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
                component: SqliteComponent
            }
        ]
    }
];
