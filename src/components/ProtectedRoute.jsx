import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
