export const requiredField = (value) => {
  if (!!value) {
    return undefined
  } return 'Это обязательное поле'
}

export const maxLengthC = (max) => { //креатир валидотора
  return (value) => {
    if (value && value.length > max) { return `Максимальное количество символов ${max}` } return undefined
  }
}

export const linkСhecking = value =>
  value && !/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/i.test(value)
    ? 'Здесь должна быть ссылка'
    : undefined
