import axios from 'axios'
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(TOKEN_LOCALSTORAGE_KEY) || '',
  },
})
