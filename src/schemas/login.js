import * as Yup from "yup"

export const LoginSchema = Yup.object(
    {
        name: Yup.string().min(2).max(30).required("enter your name"),
        email: Yup.string().email().required("enter your email id"),
        password: Yup.string().min(6).required("enter password")
    }
)