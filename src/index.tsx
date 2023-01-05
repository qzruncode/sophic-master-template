import * as React from 'react';
import ReactDOM from "react-dom/client";
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
export const sophic = new Sophic(Array.from(subApps));
sophic.registerSubApps();

console.log('sophic', sophic);

// const customHistory = createBrowserHistory();
// const SophicWrapper = props => {
//   React.useEffect(() => {
//     const subApps = [
//       {
//         name: 'sub',
//         entry: 'https://local.test.com:3002/',
//         path: '/sub',
//         container: 'sub', // id
//       },
//     ];
//     const appPubSub = Sophic.registerSubApps(Array.from(subApps), customHistory);
//     appPubSub.publish('dataCenter', { a: 'aa' });
//   }, []);
//   return props.children;
// };


const root = ReactDOM.createRoot(document.getElementById('sophicMasterTemplate') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={createRouter()} />
  </React.StrictMode>
);




