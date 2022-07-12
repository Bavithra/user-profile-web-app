import React from "react";
import { Route, Routes } from "react-router-dom";

import { PAGE_PATHS } from "./Constants";

import ProfilePage from "./pages/ProfilePage";

export default function Router() {
  return (
    <Routes>
      <Route path={PAGE_PATHS.PROFILE} element={<ProfilePage />} />
    </Routes>
  );
}
