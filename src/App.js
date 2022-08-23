import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navbar from './componemts/UI/Navbar/Navbar';
import AppPosts from './pages/AppPosts';
import { AuthContex } from './context';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="App">
      <AuthContex.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        <Navbar />
        <AppPosts />
      </AuthContex.Provider>
    </div>
  );
};

export default App;
