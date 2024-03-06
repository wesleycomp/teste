import store from '@/store'
//import jwt_decode from "jwt-decode";

export default async (to, from, next) => {

    document.title = `${process.env.VUE_APP_SISTEMA} `

    if (to.name !== 'login' && !store.getters['auth/hasToken']) {
        
        try {
            var token = to.query.access_token
                  
            if (token === undefined){//entra caso o token esteja indefinido e pega o token do cookie
                token = window.$cookies.get('token');
            }

            if (token.length > 30) {// se existir token entra para setar na cookie
               
                //analise o token para pegar o nome usuario
                //  var decodedPayload = jwt_decode(id_token, { payload: true })
                //seta o token no cookie
                // window.$cookies.set('id', id_token);
                window.$cookies.set('token', token);

                store.dispatch('auth/ActionSetTokenHeader', token)
                //  store.dispatch('auth/ActionSetUser', decodedPayload)
                store.dispatch('auth/ActionLoadSession', token)

                if (store.getters['auth/hasToken']) {//entra se existir token armazenado no cookie
                
                    next({name: 'perfil'})
                
                } else {

                    next({name: 'login'})

                }
            }
        } catch (err) {

            next({name: 'login'})

        }
    } else {
        next()
    }
}