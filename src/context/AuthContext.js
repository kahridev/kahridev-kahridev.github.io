import { createContext, useState, useEffect } from 'react';
import { getIpAddress } from '../hooks/useIpAdress';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const ip = await getIpAddress();
        const savedUser = localStorage.getItem(`user_${ip}`);
        
        if (savedUser) {
          setCurrentUser(JSON.parse(savedUser));
        }
      } catch (err) {
        setError(err);
        console.error('Kullanıcı kontrolü sırasında hata:', err);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, []);

  const login = async (user) => {
    try {
      const ip = await getIpAddress();
      localStorage.setItem(`user_${ip}`, JSON.stringify(user));
      setCurrentUser(user);
    } catch (err) {
      setError(err);
      console.error('Giriş sırasında hata:', err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      const ip = await getIpAddress();
      localStorage.removeItem(`user_${ip}`);
      setCurrentUser(null);
    } catch (err) {
      setError(err);
      console.error('Çıkış sırasında hata:', err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser, 
        loading, 
        error, 
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};