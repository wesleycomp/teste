<template>
  <div id="app">
          <layout-navbar />
          <b-container fluid> 
              <b-row >
                 <base-spinner />
                 <router-view/>
              </b-row>
          </b-container>
  </div>
</template>

<script>

import LayoutNavbar from './components/layout/LayoutNavbar'
import BaseSpinner from './components/global/BaseSpinner' 

    export default {
          name: 'App',
          components: {
            LayoutNavbar,
            BaseSpinner
          },
          computed: {
            showMenuBar() {
             return this.$route.name !== 'login'
            }
          },
          mounted(){
                  setTimeout(() =>{
                    this.$root.$emit('Spinner::hide')
                  }, 300)
          }
    }
</script>

<style lang="scss">
#app {
  
  padding: 0 0 0 0 !important;
  color: var(--dark-medium);
  background-color: var(--light);

  .navigation-sidebar {
      background-color: var(--light);
  }

  // .logo{
  //     background-color: var(--azul-tce);
  //     .app-title {
  //     color: var(--cinza-claro-tce);
  //     font-size: 20pt;
  //     margin-top: 10px;
  //     text-align: center;
  //   }
  // }

  // .body{
  //     position: absolute;
  //     margin-top: 6px;
  //     left: 320px;
  //     right: 100px;
  //   }

  // .menu{
  //     position: relative;
  //     margin-top: 2px;
  //     left: 20px;
  //     right: 20px;
  //   }

  // .menu_esquerdo{
  //     position: absolute;
  //     margin-top: 5px;
  //     margin-left: 2px;
  //     margin-right: 1px;
  //     margin-bottom: 10px;
  //     box-shadow: 1px 0px 0px var(--vermelho-escuro-tce);
  //   }


}
</style>
