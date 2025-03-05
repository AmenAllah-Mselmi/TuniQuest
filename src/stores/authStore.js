import { create } from 'zustand';

const mockUser = {
  id: '1',
  email: 'demo@example.com',
  role: 'learner',
  points: 100
};

const useAuthStore = create((set) => ({
  user: null,
  profile: null,
  loading: false,
  signIn: async (email, password) => {
    // Mock authentication
    if (email === 'admin@example.com' && password === 'admin') {
      const adminUser = { ...mockUser, role: 'admin' };
      set({ user: adminUser, profile: adminUser });
      return { user: adminUser };
    }
    set({ user: mockUser, profile: mockUser });
    return { user: mockUser };
  },
  signUp: async (email, password) => {
    set({ user: mockUser, profile: mockUser });
    return { user: mockUser };
  },
  signOut: () => {
    set({ user: null, profile: null });
  },
  loadUser: () => {
    set({ user: mockUser, profile: mockUser, loading: false });
  },
}));

export default useAuthStore;