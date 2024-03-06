export default [
    {
      path: '/portalservidor/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './Home'),
      meta: {
        showDashboard: false,
        showMenuBar: true,
        icon: 'door-open', 
        title: 'Home',
        label: 'Home'
      },
   },
   {
    path: '/portalservidor/sicapregras',
    name: 'sicapregras',
    meta: {
      showMenuBar: false,
      showDashboard: true,
      icon: 'layout-text-window-reverse', 
      title: 'Sicap Regras',
      label: 'Sicap Regras'
    },
    // beforeEnter() {
    //   const access_token = storage.getLocalToken()
    //   location.href = 'http://172.28.3.31:8083/login?access_token='+access_token
    // }
  },
  {
    path: '/portalservidor/sicapapauditor',
    name: 'sicapapauditor',
    meta: {
      showMenuBar: false,
      showDashboard: true,
      icon: 'layout-text-window-reverse', 
      title: 'Sicap AP Auditor',
      label: 'Sicap AP Auditor'
    },
    // beforeEnter() {
    //   const access_token = storage.getLocalToken()
    //   location.href = 'http://172.28.3.31:8082/login?access_token='+access_token
    // }
  }


  ]