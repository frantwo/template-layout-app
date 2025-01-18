import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from "react-router";

import MainLayout from './main-layout/MainLayout';

import { Enterprise } from './screens/Enterprise';
import { Home } from './screens/Home';
import { PrReviewTimes } from './screens/engops/pr-review-times/PrReviewTimes';
import { NotFound } from './screens/not-found/NotFound';
import { Login } from './screens/login/Login';
import { PrivateRoute } from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/enterprise" element={
            <PrivateRoute> 
              <Enterprise />
            </PrivateRoute>
          } />
          <Route path="/eng-ops/prs-measurement" element={<PrReviewTimes />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/*"
            element={<Navigate to="/not-found" replace />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;