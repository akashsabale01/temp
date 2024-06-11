import { useEffect, useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Login from "./Components/Pages/Login";
import authServiceInstance from "./Services/AuthService";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import ProtectedRoute from "./ProtectedRouteConfig/ProtectedRoute";
import UserDetails from "./Components/Pages/UserDetails";

function App() {
  const [user, setUser] = useState(null);
  console.log("user in app.jsx => ", user);

  useEffect(() => {
    const token = authServiceInstance.getToken();

    if (token) {
      const user = authServiceInstance.getUserFromToken(token);
      setUser(user);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const token = await authServiceInstance.login(email, password);
      const user = authServiceInstance.getUserFromToken(token);
      setUser(user);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const logout = () => {
    authServiceInstance.logout();
    setUser(null);
  };



  return (
    <Router>
      <Navbar user={user} logout={logout} />

      <Routes>
        <Route path="/login" element={<Login login={login} replace/>} />
        <Route path="/" element={<ProtectedRoute><Home user={user} /></ProtectedRoute>} />
        <Route path="/userDetails" element={<ProtectedRoute><UserDetails user={user} /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
