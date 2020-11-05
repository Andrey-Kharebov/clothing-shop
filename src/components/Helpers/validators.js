export const required = (value) => {
  if (value) return undefined;

  return 'Поле не может быть пустым.';
}

export const exactLengthCreator = (exactLength) => (value) => {
  if (value.length !== exactLength) return `Длина поля должна состоять из ${exactLength} цифр.`

  return undefined;

}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Длина поля не должна превышать ${maxLength} символов.`
  
  return undefined;
}
   

export const onlyNumbers = (value) => {
  if (!/^[0-9]+$/.test(value)) return `Поле должно состоять только из цифр.`

  return undefined;
}

export const noLetters = (value) => {
  if (!/^[^a-zA-Z\u0410-\u044F`]+$/.test(value)) return `Поле не должно содержать буквы.`

  return undefined;
}

export const validateEmail = (email) => {
  if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())) return 'Введите валидный email'

  return undefined
}




export const maxNumberValue = (value) => {
  if (value > 12) return `Значение поля не должно быть больше 12.`
}


export const cardNumberLengthWithSpaces = (value) => {
  if ( value && value.length === 19) return undefined; 

  return 'Номер карты должен состоять из 16 цифр.';
}