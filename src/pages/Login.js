import React, { useContext, useEffect, useState } from "react";
import { ImageWrapper, LoginButton, LoginWrapper } from "./styledComponents/Login";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/login";
import { CenterDiv, ErrorPara, HeaderOnlyLayoutWrapper, Heading, Input, Label, LabelInputWrapper, LinkWrapper } from "./styledComponents/LoginSignup";
import { UserContext } from "../utilities/context/UserContext";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/redux/userSlice";
import loginImg from "../assets/login.jpg"


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
                console.log(user, "logged in", values)
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
                console.log(values);
                resetForm()
            }
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user, "user")
                // will be executed whenever sign-in or sing-up is done by the user
                const { uid, email, displayName } = user.uid;
                // passing payload to the action
                dispatch(addUser({ udi: uid, email: email, displayName: displayName }))
                setUser(user)
                // if the user has an option to update its profile, then dispatch an action again in that component also
                // and in that component work with the (this) updated value of the user using "auth" -> firebase auth
                localStorage.getItem("location") !== null ? navigate("/home") : navigate("/")
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });

        return () => unsubscribe()
        // onAuthStateChange returns an unsubcribe function to remove this listener when the component unmounts
    }, [])

    return (
        <>
            <HeaderOnlyLayoutWrapper>
                <LoginWrapper>
                    <Heading heading="login">login</Heading>
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
                <ImageWrapper>
                    <img src={loginImg} alt="login" style={{maxHeight: "100%"}} />
                </ImageWrapper>
            </HeaderOnlyLayoutWrapper>
        </>

    )
}

export default Login