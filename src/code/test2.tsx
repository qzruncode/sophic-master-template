import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Sophic } from 'sophic';

import Loading from './Loding';

const subAppRoute = ['/sub'];

const Test = () => {
  const { subpath } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sophic = Sophic.getSophic(); // 得到在主应用中创建的Sophic实例
    const cb = params => {
      console.log(`我是主应用，我接收到${params.from}的消息：`, params.message);
      if(params.from === 'sophicTemplate') {
        navigate(params.message);
      }
    }
    sophic.appPubSub.subscribe('sophicTemplate', cb);
    return () => {
      sophic.appPubSub.clearParamsQueue('sophicTemplate'); // 清空缓存的参数队列，主应用刷新了，子应用就没必要再去消费旧数据了
      sophic.appPubSub.unsubscribe('sophicTemplate', cb);
    }
  }, [])

  useEffect(() => {
    const sophic = Sophic.getSophic(); // 得到在index.tsx中创建的Sophic实例
    // 子应用的路由
    const flag = subAppRoute.some(d => location.pathname.startsWith(d));
    flag && sophic.execSubApp();
    return () => {
      flag && sophic.unmountSubApps();
    };
  }, [location]);

  return (
    <div id="sophic_container">
      <Loading />
    </div>
  );
};

export default Test;
