import { EMAIL_REXP, NAME_REXP } from "./constants";
// import { VALIDATION } from "./constants";

export const validateName = (name) => {
  if (name === undefined) {
    return { message: "", invalid: true };
  }
  if (!NAME_REXP.test(name)) {
    console.log("name invalid true", name);
    return {
      message:
        "Используйте только латиницу, кириллицу, цифры, пробел или дефис",
      invalid: true,
    };
  }
  return { message: "", invalid: false };
};

export const validateEmail = (email) => {
  if (email === undefined) {
    return { message: "", invalid: true };
  }
  if (!EMAIL_REXP.test(email)) {
    return { message: "Введите корректный email", invalid: true };
  }
  return { message: "", invalid: false };
};
