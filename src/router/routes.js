import { routes as home } from '../views/home'
import { routes as auth } from '../views/auth'
import { routes as perfil } from '../views/perfil'


export default [
  ...auth,
  ...home,
  ...perfil
]