import React, { useContext } from "react";
import { SignUpWrapper, SignupButton } from "./styledComponents/Signup";
import { useFormik } from "formik";
import { SignUpSchema } from "../schemas/signup";
import { ErrorPara, HeaderOnlyLayoutWrapper, Heading, Input, Label, LabelInputWrapper, LinkWrapper } from "./styledComponents/LoginSignup";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { ImageWrapper } from "./styledComponents/Login";
import loginImg from "../assets/images/login.jpg"
import langConfig from "../config/langConfig.json"
import { Context } from "../utilities/context/Context";


const SignUp = () => {
    const navigate = useNavigate()
    const context = useContext(Context)
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const handleSignup = (values) => {
        // createUserWithEmailAndPassword(auth, values.email, values.password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(user, "signed in")
        //         updateProfile(user, {
        //             displayName: values.name
        //         }).then(() => {
        //             localStorage.getItem("location") ? navigate("/home") : navigate("/")
        //         }).catch((error) => {
        //             // An error occurred
        //             // ...
        //         });

        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode, errorMessage, "error")
        //     });
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values, action) => {
            handleSignup(values)
            localStorage.getItem("location") ? navigate("/main") : navigate("/")
            console.log(values)
            action.resetForm()
        }
    })
    return (
        <HeaderOnlyLayoutWrapper>
            <SignUpWrapper>
                <Heading>{context.language === "en" ?  langConfig[0].signup.signup.en : langConfig[0].signup.signup.hn}</Heading>
                <form onSubmit={formik.handleSubmit}>
                    <LabelInputWrapper>
                        <Input type="text" placeholder="enter name" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        {formik.errors.name && formik.touched.name ? <ErrorPara>{formik.errors.name}</ErrorPara> : null}
                    </LabelInputWrapper>
                    <LabelInputWrapper>
                        <Input type="email" placeholder="enter email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        {formik.errors.email && formik.touched.email ? <ErrorPara>{formik.errors.email}</ErrorPara> : null}
                    </LabelInputWrapper>
                    <LabelInputWrapper>
                        <Input type="password" placeholder="enter password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        {formik.errors.password && formik.touched.password ? <ErrorPara>{formik.errors.password}</ErrorPara> : null}
                    </LabelInputWrapper>
                    <LabelInputWrapper>
                        <Input type="password" placeholder="confirm password" name="confirmPassword" id="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        {formik.errors.confirmPassword && formik.touched.confirmPassword ? <ErrorPara>{formik.errors.confirmPassword}</ErrorPara> : null}
                    </LabelInputWrapper>
                    <SignupButton type="submit">{context.language === "en" ?  langConfig[0].signup.signup.en : langConfig[0].signup.signup.hn}</SignupButton>
                    <Label>{context.language === "en" ?  langConfig[0].signup.login.en : langConfig[0].signup.login.hn} <LinkWrapper to="/login">{context.language === "en" ?  langConfig[0].signup.loginText.en : langConfig[0].signup.loginText.hn}</LinkWrapper></Label>
                </form>
            </SignUpWrapper>
            <ImageWrapper>
                <img src={loginImg} alt="login" style={{ maxHeight: "100%", maxWidth: "100%" }} />
            </ImageWrapper>
        </HeaderOnlyLayoutWrapper>
    )
}

export default SignUp