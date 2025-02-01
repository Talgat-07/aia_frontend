import * as yup from "yup";

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/)
const regExpPhone = new RegExp(/^\+?[1-9][0-9]{7,14}$/)


export const schema = yup.object().shape({
    username: yup.string().required("Обязательное поле").min(4, "Необходимо минимум 4 символа" ),
    email:yup.string().required("Обязательное поле").matches(regExpEmail, "Неверный формат почты"),
    phone: yup.string().required("Обязательное поле").matches(regExpPhone).min(6, "Необходимо минимум 6 символов"),
    question:yup.string().required('Обязательное поле').min(5, "Необходимо больше информации")
    
})