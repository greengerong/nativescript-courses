import { SqliteComponent, CoursesComponent } from './courses';
import { path } from 'file-system';


export const appRoutes = [
    {
        path: "",
        redirectTo: "/courses",
        pathMatch: "full",

    },
    {
        path: "courses",
        component: CoursesComponent,
    },
    {
        path: 'stroage',
        children: [
            {
                path: "sqlite",
                component: SqliteComponent
            }
        ]
    }
];
