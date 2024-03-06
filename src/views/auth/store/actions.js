import * as storage from '../resource/storage'
import * as types from './mutation-types'
import jwt_decode from "jwt-decode";
import { autenticar } from '@/plugins/axios'

export const ActionDoLogin = ({ dispatch }, payload) => {
  
    return autenticar.post('token',payload).then(res => {
      var decodedPayload = jwt_decode(res.data.access_token, { payload: true })
      dispatch('ActionSetUser', decodedPayload)
      dispatch('ActionSetTokenHeader', res.data.access_token)
  })

}

export const ActionSetUser = ({ commit }, payload) => {
     commit(types.SET_USER, payload)
}

export const ActionSetTokenHeader = ({ commit }, payload) => {
    payload= window.$cookies.get('token')
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
}

// export const ActionCheckToken = () => {

//   // if (state.access_token) {
//   //   return Promise.resolve(state.access_token)
//   // }

//   const access_token = window.$cookies.get("token");//le o token no cookie


//   if (!access_token) {
//     return Promise.resolve(access_token) 
//   }

//  // dispatch('ActionSetTokenHeader', access_token)
//   return Promise.resolve(access_token) 
// }



export const ActionLoadSession = ({ dispatch }, payload) => {

  var urlToken =  { "token": payload }
  const tokenParms = new URLSearchParams(urlToken);

  return autenticar.post('/code/userinfo', tokenParms).then((res => {

    const data = res.data

    //console.log(data)
    dispatch('ActionSetUser', data)
   // return Promise.resolve()
    }),(rej) => {
      console.log(rej)
    })
}

export const RefreshToken = ({ dispatch}) =>{

  autenticar.get('callback/refreshtoken').then(res => {
    const data2 =res.data
    dispatch('ActionSetUser', data2)
  })





}

export const ActionSignOut = () => {

    //  dispatch('finalizarSessao')
    //      storage.setHeaderToken('')
    //  storage.deleteLocalToken()
    // dispatch('ActionSetUser', {})
    // dispatch('ActionSetToken', '')
     //window.$cookies.remove('id');
     window.$cookies.remove('token');


  // var url=`${process.env.VUE_APP_URL_PORTAL_SERVIDOR}`+"/login"
  //  window.open(`${process.env.VUE_APP_AUTENTICAR}`+"authentication?url="+url+"+&token=");

    }