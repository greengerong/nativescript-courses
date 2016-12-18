import { SqliteComponent, CoursesComponent } from './courses';

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
];
