export default [
  {
    path: '/portalservidor/perfil',
    name: 'perfil',
    meta: {
      showMenuBar: true,
      showDashboard: true,
      icon: 'door-open', 
      title: 'Perfil',
      label: 'Perfil'
    },
    component: () => import(/* webpackChunkName: "perfil" */ './pages/Perfil')
  }
]