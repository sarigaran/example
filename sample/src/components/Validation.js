import * as yup from 'yup';

export const Uservalidation=yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).max(9).required()
});