import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import routes from "../routes";

import Home from "../pages/Home";

const Root = () => {
    return (
        <div>
            <Routes>
                <Route element={<Home />}>
                    {routes.map((routeItem) => {
                        const ElementParent = routeItem.element;
                        return (
                            <Route
                                key={routeItem.id}
                                path={routeItem.path}
                                element={<ElementParent />}
                            />
                        );
                    })}
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default Root;
