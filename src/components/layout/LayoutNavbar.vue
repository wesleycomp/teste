<template>
   <b-container fluid class="row_header">
          <b-row>
                  <b-col class="col-3 row_header_logo" >
                          <b-row>
                            <b-col class="col-2">
                              <img src="@/assets/imgs/logo_TCE.jpg" class="img-logo">
                            </b-col> 
                            <b-col class="col-10">
                                <div class="row fonte_titulo_logo">&nbsp;Tribunal de Contas</div>
                                <div class="row fonte_subtitulo_logo">&nbsp;&nbsp; do Estado do Tocantins</div>
                            </b-col>
                          </b-row>
                  </b-col>
                  <b-col class="col-4 header_top">
                        <span class="text-white h4 ">&nbsp; Portal do Servidor</span>
                  </b-col>
                  <b-col class="col-5" >
                      <b-row class="row_header_perfil">
                            <b-col class="col-10">
                              <b-icon class="header_top" icon="person-circle" :hidden="visibleIconUsuario()" variant="light" width="25" height="25" ></b-icon>
                                  <span class="text-white h5 header_top">&nbsp; {{ user.name }}</span>
                            </b-col>
                            <b-col class="col-2">
                                  <b-button class="botao-sair" @click="submit()" data-dismiss="modal" aria-label="Close" type="submit" size="sm">Sair <b-icon icon="arrow-right-circle" aria-hidden="true"></b-icon></b-button>
                            </b-col>
                      </b-row> 
                </b-col>
          </b-row>
   </b-container>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

  computed: {
     ...mapState('auth', ['user']),

    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }

  },
  
  methods: {

    ...mapActions('auth', ['ActionSignOut']),

    async submit () {

      try {
           this.user.name = " " //retira nome do perfil usuario
          await this.ActionSignOut(this.form)
             this.$router.push({ name: 'login' })
             // window.$cookies.remove('id');
              window.$cookies.remove('token');

          } catch (err) {
              alert('Não foi possível fazer logof')
          }
    },

    visibleIconUsuario(){
        
      var token = window.$cookies.get('token');
         if(token === null){
            return true
         }
         else{
           return false
         }
    }
  }
}
</script>

<style scoped lang="scss">

    .row_header{
         padding: 0 0 0 0 !important;
         background-color: var(--azul-tce);
         box-shadow: 0px 5px 2px var(--vermelho-escuro-tce);
    }

    .row_header_logo{
      background-color: var(--azul-escuro-tce);
    }

    .row_header_perfil{
      padding: 0 0 0 0 !important;
    }

    .botao-sair{
      background-color: var(--vermelho-escuro-tce); 
     // margin-left: 3rem;  
      margin-top: 10px;
    }


    .header_top{
      margin-top: 10px;
    }

    .img-logo{
      margin-top: 3px;
      margin-bottom: 5px;
      margin-left: 25px; 
      margin-right: 5px;
      width: 40px;
      height: 50px;
    }

    .fonte_titulo_logo {
        font-size: 1.953rem/27.34px !important;
        font-weight: bold;
        color: var(--cinza-ligt-tce) !important;
        position: relative;
        top: 5px; 
    }

    .fonte_subtitulo_logo {
        font-size: 13px !important;
        color: var(--cinza-ligt-tce) !important; 
        font-weight: 300;
        position: relative;
    }

/** TRATAR A RESPONSVIDADE */
/* Tablet em retrato a paisagem e desktop */
@media only screen and (min-width: 995px) and (max-width: 1199px) {
  

  .col1-head {width: 18%;}
  .col2-head {width: 57%;}
  .col3-head {width: 30%;}


  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 20%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 55%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
  
}

/** desqktop grande */
@media only screen and (min-width: 1200px) {
  
  .col1-head {width: 18%;}
  .col2-head {width: 57%;}
  .col3-head {width: 25%;}
  .col5-head {width: 32%;}
  
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 18%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 64%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
  
}

@media (max-width: 480px) { 
 
 
  .col1-head {width: 18%;}
  .col2-head {width: 57%;}

  .col3-head {display: block;}

  .col{
       display: block;
   }

   .header1{
     display: block;
   }

 
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 20%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 55%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}


  
 }

/* Telefones em paisagem a tablet em retrato */
@media  (max-width: 994px) {
  
  .col1-head {width: 18%;}
  .col2-head {width: 57%;}
  .col3-head {display: block;}
 
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 20%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 55%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
  
}


</style>