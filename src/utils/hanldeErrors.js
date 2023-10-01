import { CONFLICT } from './constants';
function hanldeErrors(e, setErrorRegister) {
  
  if (e === CONFLICT) {
    setErrorRegister('Пользователь с таким email уже существует.');
    
    console.log('setErrorRegister')
  } 
}

export default hanldeErrors;