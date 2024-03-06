<template>
    <b-container fluid class="coluna_menu">
          <b-row> 
                <b-col class="col-3 listmenu">
                              <div v-for="(item,index) in items.unidades" v-bind:key="item.index" class="accordion" role="tablist">
                                  <b-card no-body class="mb-2">
                                        <b-card-header header-tag="header" class="p-1" role="tab" >
                                              <b-button block v-b-toggle="'accordion-unidades'+index" > {{item.unidademae}} 
                                                  <span class="when-opened">
                                                    <b-icon class="ms-auto" icon="chevron-double-up" />
                                                  </span>
                                                  <span class="when-closed">
                                                      <b-icon class="ms-auto" icon="chevron-double-down" />
                                                  </span>
                                              </b-button> 
                                         </b-card-header>
                                         
                                        <b-collapse
                                            :id="'accordion-unidades'+index"
                                            :visible="collapseVisible(index)"
                                            :accordion="'unidadesdedetails-accordion'+index"
                                            role="tabpanel"
                                          >
                                            <b-card-body>
                                              <b-nav vertical>
                                                  <ul  v-for="itemChidren in item.children" v-bind:key="itemChidren.id" >
                                                    <span class="nav-link" @click="listPerfil(itemChidren.cnpj, itemChidren.cpf)" >{{itemChidren.unidadefilha}}</span>
                                                  </ul>
                                              </b-nav>
                                            </b-card-body>
                                        </b-collapse>
                                   </b-card>
                              </div>
              </b-col> 
  
              <b-col class="col-9" >
                  
            <div id="home">
              <div  v-for="(itemCategoria, index) in perfilSistema.perfil" v-bind:key="itemCategoria.id" >
                <p class="tituloCategoria"> {{itemCategoria.categoria}} </p>

               <div class="home-links">
                        <b-card
                             v-for="itemSistema in itemCategoria.sistemas"
                             :key="itemSistema.id"
                             :class="'home-link'+index"
                          >
                             <span class="h3 mb-2" @click="redirecionaSistema(itemSistema.url)" >{{itemSistema.nome}} </span>
                             <span class="h5 mb-1" @click="redirecionaSistema(itemSistema.url)" > {{itemSistema.descricao}} </span>
                        </b-card>


                  </div>


              </div>
            </div>


              </b-col> 
          </b-row>
     </b-container>
</template>
<script>

import {mapActions} from "vuex";

var treeData = {
                            "unidades": [
                                          {
                                            "unidademae": "MUNICÍPIO DE PALMAS",
                                            "children": [
                                                          { "unidadefilha": "Tribunal de Contas do Estado do Tocantins", "cnpj": "111222333", "cpf": "99999999" }
                                                        ]
                                          }
                                        ]
                          };
  var treeDataSistemas = {
                            "perfil": [
                                        {
                                          "categoria": "Sistemas de Controle Externo",
                                           "sistemas": [
                                                         { "nome": "SICAP AP AUDITOR", "descricao": "Controle Atos de Pessoal", "url": "https://www.tceto.tc.br/sicapapauditor" },
                                                         { "nome": "SICAP CONTÁBIL", "descricao": "MODULO GESTOR", "url": "http://172.28.3.31:8090/sicapcontabilmunicipalgestor/auth" }
                                                      ]
                                        }
                                    ]
                        };
                      export default {
                      
                          name:'Perfil',
                          data() {

                            return {
                                  dadosCpf:'',     
                                  dadosCnpj:'',
                                  items: treeData,
                                  perfilSistema:treeDataSistemas
                                   }

                          },
                          methods:{

                                  ...mapActions("perfil", ["ActionRedireciona"]),

                                        listPerfil(cpf,cnpj){
                                          this.dadosCpf=cpf;
                                          this.dadosCnpj=cnpj;
                                          },
                                        redirecionaSistema(url){
                                           var access_token = window.$cookies.get('id');
                                           window.open("https://www.tceto.tc.br/backendportalservidor/authentication?url="+url+"+&id="+access_token);
                                        },

                                        collapseVisible(value){
                                          return (value === 0) ? true : false
                                        }
                                  },
                          };

</script>

<style lang="scss" scoped>

      .tituloCategoria
      {
            text-decoration: underline;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 22px;
            align-items: left;
      }

      .tituloSistema
      {
          
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 12px;
      }


    .collapsed > .when-opened,
        :not(.collapsed) > .when-closed {
            display: none;
        }

    .nav {

        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 1.25rem/17.50px;
        margin-left: -52px;
        width: calc(100% + 30px);
        cursor: pointer;

      .nav-link {

        color: var(--cinza-escuro-tce);
        transition: .4s;

        &.active {

          color: var(--azul-tce);
          background-color: transparent;

        }
        &:hover {

          color: var(--dark);
          background-color: var(--light-medium);

        }
      }
    }


  .titulo_arquivos{

      font-size: 1.25rem;
      font-weight: 600;
      line-height: 2.475rem;
      margin: 1rem 0 1rem 1rem;
      height: 2rem;
      padding-left: 5px;
      box-shadow: 0px 5px 2px var(--cinza-escuro-tce);

  }

  .coluna_menu{
        padding: auto;
        padding-top: 10px;
    }


  .container-fluid{
        padding: 7px 50px 10px 10px !important;
        }

  .listmenu{
       padding-top: 10px;
       padding-left: 0px;
       background-color: #f4f4f4;
       box-shadow: 2px 1px 20px var(--cinza-claro-tce);
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

@mixin flex-center($columns: false) {
  display: flex;
  align-items: left;
  justify-content: left;
  @if $columns {
    flex-direction: column;
  }
}

#home {
  width: 100%;
  //height: 70vh;
  @include flex-center(true);
  justify-content: space-around;
  .user-info {
    text-align: center;
  }
  .home-links {
    width: 100%;
    @include flex-center();
    cursor: pointer;

    .home-link0 {
      text-align: center;
      flex: 0 22%;
      margin:  5px;
      padding: 12px 0;
      transition: .4s;
      text-decoration: none;
      background-color: var(--bs-blue);
      color: var(--bs-white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
    }

    .home-link1 {
      text-align: center;
      flex: 0 20%;
      margin:  5px;
      padding: 20px 0;
      transition: .4s;
      text-decoration: none;
      background-color: var(--bs-orange);
      color: var(--bs-white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
    }

     .home-link2 {
      text-align: center;
      flex: 0 20%;
      margin:  5px;
      padding: 20px 2px;
      transition: .4s;
      text-decoration: none;
      background-color: var(--bs-orange);
      color: var(--bs-white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
    }

    .home-link3 {
      text-align: center;
      flex: 0 20%;
      margin:  5px;
      padding: 20px 0;
      transition: .4s;
      text-decoration: none;
      background-color: var(--bs-orange);
      color: var(--bs-white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
    }

    .home-link4 {
      text-align: center;
      flex: 0 20%;
      margin:  5px;
      padding: 20px 0;
      transition: .4s;
      text-decoration: none;
      background-color: var(--bs-orange);
      color: var(--bs-white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
    }

  .home-link5 {
      text-align: center;
      flex: 0 20%;
      margin:  5px;
      padding: 20px 0;
      transition: .4s;
      background-color: var(--bs-orange);
      text-decoration: none;
      color: var(--bs-white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
    }

  //  .home-link1:first-child { background-color: var(--bs-green) }
    .home-link0:nth-child(1) { background-color: #00467D }
    .home-link0:nth-child(2) { background-color: #0066B0; }
    .home-link0:nth-child(3) { background-color: #0A95FF; }
    .home-link0:nth-child(4) { background-color: #47AFFF; }
    .home-link0:nth-child(5) { background-color: #85CAFF; }
     // .home-link:last-child { background-color: var(--bs-cyan) }

    .home-link1:nth-child(1) { background-color: #44A12B }
    .home-link1:nth-child(2) { background-color: #52C133 }
    .home-link1:nth-child(3) { background-color: #6AD04E }
    .home-link1:nth-child(4) { background-color: #A0E18E;}
    .home-link1:nth-child(5) { background-color: #BBEAAE; }

    .home-link2:nth-child(1) { background-color: #931D19;  }
    .home-link2:nth-child(2) { background-color: #D12923; }
    .home-link2:nth-child(3) { background-color: #E15551; }
    .home-link2:nth-child(4) { background-color: #EA8885; }
    .home-link2:nth-child(5) { background-color: #F3BBB9; }

  }
}


</style>