import * as Yup from "yup"

export const SignUpSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("enter your name"),
    email: Yup.string().email().required("enter your email id"),
    password: Yup.string().min(6).required("enter password"),
    confirmPassword: Yup.string().required().test(
        'passwords-match',
        'Passwords must match',
        function (value) {
            // If value is null, treat it as an empty string
            value = value || '';
            return this.parent.password === value;
        }
    )
})