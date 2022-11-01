export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'http://home.ru',
  app: process.dev ? 'http://app.localhost:8080/' : 'http://app.home.ru',
};

export const app = {
  title: 'Notes',
};

export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/',
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about',
  },
];