import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
//const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));
const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
  //  { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
];

export default routes;