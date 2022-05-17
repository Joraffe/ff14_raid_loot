import { createRouter, createWebHistory } from 'vue-router';

import SideBar from 'components/SideBar.vue';
import DataStructures from 'views/DataStructures.vue';
import Algorithms from 'views/Algorithms.vue';
import Home from 'views/Home.vue';


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: Home,
        sidebar: SideBar,
      },
    },
    {
      path: '/datastructures',
      name: 'datastructures',
      components: {
        content: DataStructures,
        sidebar: SideBar,
      },
    },
    {
      path: '/algorithms',
      name: 'algorithms',
      components: {
        content: Algorithms,
        sidebar: SideBar,
      },
    },

  ],
});
