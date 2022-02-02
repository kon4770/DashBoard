import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import Login from "./Login";
import Dashboard from "./DashBoard";
import OrdersListPage from "./Pages/OrdersListPage";
import SalesQualityPage from "./Pages/SalesQualityPage";
import FeedbackPage from "./Pages/FeedbackPage";
import ErrorPage from "./Pages/ErrorPage";
import ChartPage from "./Pages/ChartPage";

function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/orders"
          element={
            <RequireAuth>
              <OrdersListPage />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/salesQ"
          element={
            <RequireAuth>
              <SalesQualityPage />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/feedback"
          element={
            <RequireAuth>
              <FeedbackPage />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/chart"
          element={
            <RequireAuth>
              <ChartPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
