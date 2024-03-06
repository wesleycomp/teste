<template>
<div id="login">
  <form @submit.prevent="submit()" class="form-login" >
 
    <div class="card">
        <div class="card-header text-center">
          <h3 class="mb-0"><b>Painel de Acesso </b></h3>
        </div>

          <div class="card-body">
          
            <div >
             <div class="col"> 
                <div class="row text_identificacao">
                 <div class="row">
                    <div class="col-8"><b-icon icon="person-lines-fill"   width="25" height="25" ></b-icon><b> Identificação</b> </div>
                    <div class="col-4"></div>
                  </div>
                </div>
                <div class="row text_aviso">
                  &nbsp; Caso não consiga acesso ente em contato no ramal 5935.
                </div>
             </div>

            </div>


          <div class="botao_entrar">
             <b-button @click="autenticarUsuario" class="btn btn-primary " :disabled='loading'  >
                  <template v-if="loading">
                  Entrando
                    <i class="fa fa-spinner fa-spin"></i>
                  </template>

                  <template v-else>
                  Entrar
                    <i class="fa fa-sign-in-alt"></i>
                </template>
             </b-button>
          </div>
 <hr>
          </div>
        </div>
  </form>

</div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name:'Login',
  data: () => ({
      loading: false,
      modalShow:false
  }),

  methods: {

    createItem() {
                  this.modalShow = true;
                  },
  
   autenticarUsuario() {
               //  window.location.href="https://172.30.0.149:8084/code/authentication"
              window.location.href=`${process.env.VUE_APP_AUTENTICAR}`+"/code/authentication"; 
   }

},
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showDashboard
      ))
    }
  }
}
</script>

<style lang="scss" scoped>

      .form-login {
           height: 70vh;
           display: flex;
           align-items: center;
           justify-content: center;
        
         h1{
            font-size:18pt;
          }

        .card {
          width:30%;
          color: var(--azul-tce);
          box-shadow: 0 2px 4px #00000033;
        }
    
        .text_aviso{
      
          color:var(--cinza-escuro-tce);
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          font-size: 0.8rem;

        }

        .text_identificacao{
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          color:var(--dark-medium);
          flex: 1 1 100%;
          font-size: 1.2em;
          font-weight: 500;

        }

        .botao_entrar{
          margin-top: 3em;
          align-items: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

  }
  

</style>