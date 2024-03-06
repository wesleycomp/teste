import { setBearerToken } from  '@/plugins/axios'

export const setHeaderToken = access_token => setBearerToken(access_token)