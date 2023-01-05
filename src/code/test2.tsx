import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { sophic } from '../index';
import Loading from './Loding';

const subAppRoute = ['/sub'];

const Test = () => {
  const { subpath } = useParams();
  const location = useLocation();

  useEffect(() => {
    // 子应用的路由
    const flag = subAppRoute.some(d => location.pathname.startsWith(d));
    flag && sophic.execSubApp();
  }, [location]);
 
  return (
    <div id="sophic_container">
      <Loading />
    </div>
  );
};

export default Test;
