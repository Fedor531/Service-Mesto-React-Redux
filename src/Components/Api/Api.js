import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://praktikum.tk/cohort11',
  headers: {
    authorization: '4a26d64f-13d9-4fd9-978e-f9c29a1c49d5',
    'Content-Type': 'application/json'
  }
}); // настройка экземпляр axios


export const profileApi = {

  getUserInfo() {
    return instance.get('/users/me')
      .then(res => res.data)
  },

  updatetUserInfo(name, about) {
    return instance.patch('/users/me', {
      name: name,
      about: about
    })
      .then(res => res.data)
  }
}

export const cardsApi = {

  getCards() {
    return instance.get('/cards')
      .then(res => res)
  },

  addCard(name, link) {
    return instance.post('/cards', {
      name: name,
      link: link
    })
      .then(res => res.data)
  },

}


