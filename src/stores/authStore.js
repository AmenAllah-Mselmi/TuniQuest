import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  user: null,
  profile: null, // Assuming profile will store role or other user info

  // This is your new loadUser function
  loadUser: () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          set({ user: response.data.user, profile: response.data.profile });
        })
        .catch(() => {
          set({ user: null, profile: null });
        });
    } else {
      set({ user: null, profile: null });
    }
  },

  signIn: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      set({ user: response.data.user });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  signUp: async (email, password, name) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/', { email, password, name });
      set({ user: response.data.user });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  signOut: () => {
    set({ user: null, profile: null });
    localStorage.removeItem('token');
  },
}));

export default useAuthStore;
