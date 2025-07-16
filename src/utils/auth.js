import { jwtDecode } from 'jwt-decode';

// Get the token from localStorage
export function getToken() {
  return localStorage.getItem('token');
}

// Set the token into localStorage
export function setToken(token) {
  localStorage.setItem('token', token);
}

// Remove the token from localStorage
export function logout() {
  localStorage.removeItem('token');
}

// Check if user is authenticated and token is valid
export function isAuthenticated() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000; // in seconds
    return decoded.exp > now ? decoded : null;
  } catch {
    return null; // Token is invalid or malformed
  }
}
