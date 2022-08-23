import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContex } from '../context';
import { publicRoutes, priveteRoutes } from './routes';

const AppPosts = () => {
  const {isAuth, setIsAuth} = useContext(AuthContex);
  // const isAuth = false
  console.log(isAuth)
  return (
    <div className="AppPosts">
     <div> {isAuth ? (
        <Routes>
          {priveteRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      )}

      </div>
    </div>
  );
};

export default AppPosts;
