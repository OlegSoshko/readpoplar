import React from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  HomePage,
  MainPage,
  NotFoundPage,

} from '../pages';


export const Router: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} >
        <Route index element={<Navigate to='home' replace/>} />
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}