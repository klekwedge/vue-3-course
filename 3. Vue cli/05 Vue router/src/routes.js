import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from 'vue-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const routerHistory = createWebHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
  ],
});

export default routers;
