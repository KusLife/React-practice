import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const AppPosts = () => {
  return (
    <div className="AppPosts">
      
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>


      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage/>} />
        <Route path="*" element={<Error />} />
      </Routes> */}
    </div>
  );
};

export default AppPosts;
