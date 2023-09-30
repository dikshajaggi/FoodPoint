import React, { useContext } from "react";
import { LoginButton, LoginWrapper } from "./styledComponents/Login";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/login";
import { CenterDiv, ErrorPara, HeaderOnlyLayoutWrapper, Heading, Input, Label, LabelInputWrapper, LinkWrapper } from "./styledComponents/LoginSignup";
import { UserContext } from "../utilities/context/UserContext";
import { useNavigate } from "react-router";
import { Context } from "../utilities/context/Context";

const Login = () => {
    const { setUser } = useContext(UserContext)
    const history = useNavigate()
    const quantity = useContext(Context)
    const initialValues = {
        email: "",
        password: ""
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, { resetForm }) => {
            if(quantity.length !== 0) history("/cart")
            setUser(values.name)
            console.log(values);
            resetForm()
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