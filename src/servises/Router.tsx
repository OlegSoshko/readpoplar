import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import { 
  MainPage, 
  NotFoundPage,
  ServicesPage
} from '../pages';


export const Router: React.FC = () => {
  
  return (
    <Routes>
      <Route path="/" element={<MainPage />} >
        <Route path="services" element={<ServicesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}