import axios from "axios";

export const ssoTce = axios.create({
    baseURL: `${process.env.VUE_APP_HTTP_SSO}`,
    headers: {'Content-type': 'application/x-www-form-urlencoded'}
})

export const api = axios.create({
    baseURL: `${process.env.VUE_APP_HTTP_API}`,
  headers: {'Content-type': 'application/json'}
})

export const autenticar = axios.create({
    baseURL: `${process.env.VUE_APP_AUTENTICAR}`,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded', 
        'Accept': 'application/json'
    }
})


api.interceptors.request.use(config=>{
  return config
}, error => Promise.reject(error))

api.interceptors.response.use(config=>{
  return config
}, error => Promise.reject(error))

autenticar.interceptors.request.use(config=>{
  return config
}, error => Promise.reject(error))

//intercepta os response autenticar
autenticar.interceptors.response.use(resp=>{
  // if (resp.status === 401) {//status nao autorizado obs: tratar os demais erros
  //  store.dispatch('auth/ActionSignOut')//remove o token do header
  //  window._Vue.$router.push({ name: 'login' })//redireciona para o login
  // }
  return resp
}, error => Promise.reject(error))


//seta o token no header para as proximas requests
const setBearerToken = access_token => {

  api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
  ssoTce.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
  autenticar.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
  //urlExterna.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
 }


 export{setBearerToken}