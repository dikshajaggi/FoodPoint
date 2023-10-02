import React, { useContext, useState } from "react";
import { LoginButton, LoginWrapper } from "./styledComponents/Login";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/login";
import { CenterDiv, ErrorPara, HeaderOnlyLayoutWrapper, Heading, Input, Label, LabelInputWrapper, LinkWrapper } from "./styledComponents/LoginSignup";
import { UserContext } from "../utilities/context/UserContext";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase";


const Login = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const initialValues = {
        email: "",
        password: ""
    }
    const [error, setError] = useState(null)

    const handleLogin = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user, "logged in")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} + ${errorMessage}`)
            });
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, { resetForm }) => {
            handleLogin(values)
            if (error !== null) {
                navigate(-1)
                setUser(values.name)
                console.log(values);
                resetForm()
            }
        }
    })
    return (
        <>
            <HeaderOnlyLayoutWrapper>
                <CenterDiv>
                    <LoginWrapper>
                        <Heading>login</Heading>
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
                            {error !== null ? <ErrorPara>{error}</ErrorPara> : null}
                            <LoginButton type="submit">login</LoginButton>
                            <Label>Don't have an account? <LinkWrapper to="/signup">Sign up </LinkWrapper></Label>
                        </form>
                    </LoginWrapper>
                </CenterDiv>
            </HeaderOnlyLayoutWrapper>
        </>

    )
}

export default Login