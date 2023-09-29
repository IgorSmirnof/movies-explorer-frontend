import { useState, useCallback } from 'react';
import { VALIDATION } from "../utils/constants"
//   const { values, isValid, errors, handleChange, resetForm } = useFormValidate();
export function useFormValidate() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;

    if (name === 'name') {
      e.target.validity.patternMismatch
        ? e.target.setCustomValidity(VALIDATION.name.message)
        : e.target.setCustomValidity('');
    }
    if (name === 'email') {
      e.target.validity.patternMismatch
        ? e.target.setCustomValidity(VALIDATION.email.message)
        : e.target.setCustomValidity('');
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid
  };
}
