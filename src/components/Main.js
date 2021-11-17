import { Route, Routes, Navigate } from 'react-router-dom';
import {
  LoginPage, WelcomePage, OrdersPage, CreatePage,
} from '.';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </main>
  );
}

export default Main;
