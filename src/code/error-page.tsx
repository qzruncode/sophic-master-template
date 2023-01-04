import React from 'react';
import { useLocation, useRouteError } from 'react-router-dom';
import { sophic } from '../index'; 
import Loading from './Loding';

const subAppRoute = ['/main/sub'];

export default function ErrorPage() {
  const error = useRouteError();
  const location = useLocation();

  
  if (subAppRoute.includes(location.pathname)) {
    // 要渲染子应用
    sophic.execSubApp();
    return (
      <div id="sophic_container" style={{ display: 'none' }}>
        <Loading />
      </div>
    );
  }

  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
