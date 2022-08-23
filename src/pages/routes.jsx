import React from 'react';
import About from './About';
import Posts from './Posts';
import Error from './Error';
import PostIdPage from '../componemts/PostIdPage';
import { Login } from './Login';

export const priveteRoutes = [
  { path: '/about', element: <About/> },
  { path: '/posts', element: <Posts/> },
  { path: '/posts/:id', element: <PostIdPage/> },
  { path: '/', element: <Posts/> },
  { path: '*', element: <Error/>}
];

export const publicRoutes = [
  { path: '/login', element: <Login/> },
  { path: '/', element: <Login/> },
  { path: '*', element: <Login/>}
];



