 import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://praktikum.tk/cohort11',
  headers: {
    authorization: '4a26d64f-13d9-4fd9-978e-f9c29a1c49d5',
    'Content-Type': 'application/json'
  }
}); // настройка экземпляр axios


export const Api = {
  getCards() {
    return instance.get('/cards')
      .then(res => res)
  }
}


