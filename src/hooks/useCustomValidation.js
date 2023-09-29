import { useEffect } from "react";

export const useCustomValidation = (
  values,
  errors,
  setIsFormValid,
  currentUserData
) => {
  const amountInputs = document.querySelectorAll(".input").length;

  useEffect(() => {
    // проверяем на равенство значений двух объектов
    // текущий пользователь и значения в инпутах
    if (JSON.stringify(currentUserData) === JSON.stringify(values)) {
      // отключаем кнопку
      setIsFormValid(false);
    } else {
      // проверка на валидность
      if (
        Object.keys(errors).length === 0 &&
        Object.values(values).length === amountInputs
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
  }, [errors, setIsFormValid, values, currentUserData]);
};