export default [
  {
    path: '/portalservidor/login',
    name: 'login',
    meta: {
      showNavbar: false,
      showDashboard: false,
      icon: 'door-open', 
      title: 'Login',
    },
    component: () => import(/* webpackChunkName: "login" */ './pages/Login')
  },
  {
    path: '/portalservidor/logout',
    name: 'logout',
    meta: {
      showNavbar: false,
      showDashboard: false,
      icon: 'door-open', 
      title: 'Logout',
    },
    component: () => import(/* webpackChunkName: "logout" */ './pages/Logout')
  },
  {
    path: '/portalservidor/auth',
    name: 'auth',
    meta: {
      showNavbar: false,
      showDashboard: false,
      icon: 'door-open', 
      title: 'auth',
    },
    component: () => import(/* webpackChunkName: "login" */ './pages/Login')
  }
  // {
  //   path: '/code',
  //   name: 'code',
  //   meta: {
  //     showNavbar: false,
  //     showDashboard: false,
  //     icon: 'door-open', 
  //     title: 'Code',
  //   },
  //   component: () => import(/* webpackChunkName: "login" */ './pages/Code')
  // }
]