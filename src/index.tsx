import * as React from 'react';
import ReactDOM from 'react-dom/client';
import createRouter from './code/router';
import { RouterProvider } from 'react-router-dom';
import { Sophic } from 'sophic';
import './index.less';

const subApps = [
  {
    name: 'sophicTemplate',
    entry: 'https://local.test.com:3002/',
    path: '/sub',
    container: 'sophicTemplate', // id
  },
];
const sophic = new Sophic(Array.from(subApps), 'sw');
sophic.registerSubApps();
sophic.appPubSub.publish('sophicTemplate', {
  from: 'sophicMasterTemplate',
  message: 'hahaha',
});

const root = ReactDOM.createRoot(document.getElementById('sophicMasterTemplate') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={createRouter()} />
  </React.StrictMode>
);
