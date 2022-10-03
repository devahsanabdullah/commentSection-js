import * as yup from 'yup';

export const SinupValdation=yup.object({
    username:yup.string().required("username"),
    password:yup.string().required("password")
});


