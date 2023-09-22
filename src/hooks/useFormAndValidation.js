import {useState, useCallback} from 'react';
import { EMAIL_REXP } from '../utils/constants';

const validateInput = (errors, setErrors, name, value, setIsValid) => { 
  if (name === 'email' && !EMAIL_REXP.test(value)) {
    setErrors({ ...errors, email: 'Укажите корректный e-mail' })
    setIsValid(false)
  } else {
    setErrors({ ...errors, email: '' })
  } 
};

export function useFormAndValidation() {
  const [ values, setValues ] = useState({
    name: '',
    email: '',
    password: '',});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    if (!e.target.validationMessage) validateInput(errors, setErrors, name, value, setIsValid);
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);
  // console.log(errors);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}