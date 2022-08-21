import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Posts from './Posts';
import Error from './Error';
import PostIdPage from '../componemts/PostIdPage';

const routes = [
  { path: '/about', element: <About/> },
  { path: '/posts', element: <Posts/> },
  { path: '/posts/:id', element: <PostIdPage/> },
  { path: '*', element: <Error/>}
];

// routes.map(route => <div> <Routes> <Route path={route.path} element={route.element} /> </Routes> </div>)

// () => {
//   return (
//     <div className="AppPosts">

//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/posts/:id" element={<PostIdPage/>} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </div>
//   );
// };

export default routes;
