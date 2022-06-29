import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import LoginAdministrador from './components/auth/LoginAdministrador';
import RequireAuthentication from './components/auth/RequireAuthentication';
import Info from './components/pages/Info';
import VerAccesos from './components/main/VerAccesos';
import { AuthProvider } from './hooks/useAuth';
import NotFound from './components/pages/NotFound';
import Nav from './components/auxiliaries/Nav';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LoginAdministrador />} />
            <Route path="/accesos" element={
              <RequireAuthentication>
                <VerAccesos />
              </RequireAuthentication>
            } />
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
