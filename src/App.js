import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Clients from './pages/customers';
import './App.css';
import ProtectedRoute from './components/protectedRoute';
import { AuthProvider } from './auth';


export default function App() {
  return (
    <div className="app">
      <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route exact path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  )
}