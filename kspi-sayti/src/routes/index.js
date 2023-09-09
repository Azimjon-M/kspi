import React from "react";
import Root from "../root/index";

import Home from "../pages/Home";
import About from "../pages/About";

export const routes = [
    {
        element: <Root />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <About />,
                path: '/about'
            }
        ],
    },
];