import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import AdminQabulxonaPage from "../pages/AdminQabulxonaPage";
import LoginPage from "../pages/LoginPage";
import AdminKorrupsiyaQabulxonaPage from "../pages/AdminKorrupsiyaQabulxonaPage";
import LoginKorrupsiyaPage from "../pages/LoginKorrupsiyaPage";
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
        {/* Virtual qabulxona */}
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin-virtual-qabulxona"
          element={<AdminQabulxonaPage />}
        />
        {/* Korrupsiya qabulxona */}
        <Route path="/korrupsiya" element={<LoginKorrupsiyaPage />} />
        <Route
          path="/korrupsiya-qabulxona"
          element={<AdminKorrupsiyaQabulxonaPage />}
        />
        {/* NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Root;
