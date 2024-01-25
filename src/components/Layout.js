import { Outlet } from 'react-router';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      className="phone-screen"
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
