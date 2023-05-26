// pages
import Users from "./pages/Users";
import Resource from "./pages/Resource";
import Create from "./pages/Create";
import User from "./pages/User";
import Resources from "./pages/Resources";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'users-route',
        title: 'Users',
        path: '/',
        enabled: true,
        component: Users
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: '/Resources',
        enabled: true,
        component: Resources
    },
    {
        key: 'create-route',
        title: 'create',
        path: '/create',
        enabled: true,
        component: Create
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/unknown/:id',
        enabled: false,
        component: Resource
    }
]