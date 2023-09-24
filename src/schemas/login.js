import * as Yup from "yup"

export const LoginSchema = Yup.object(
    {
        email: Yup.string().email().required("enter your email id"),
        password: Yup.string().min(6).required("enter password")
    }
)