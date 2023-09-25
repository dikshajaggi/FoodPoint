import React from "react";
import { SignUpWrapper, SignupButton } from "./styledComponents/Signup";
import { useFormik } from "formik";
import { SignUpSchema } from "../schemas/signup";
import { CenterDiv, ErrorPara, HeaderOnlyLayoutWrapper, Heading, Input, Label, LabelInputWrapper, LinkWrapper } from "./styledComponents/LoginSignup";

const SignUp = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })
    return (
        <HeaderOnlyLayoutWrapper>
            <CenterDiv>
                <SignUpWrapper>
                    <Heading>sign up</Heading>
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
                        <SignupButton type="submit">sign up</SignupButton>
                        <Label>Already have an account? <LinkWrapper to="/login">Login</LinkWrapper></Label>
                    </form>
                </SignUpWrapper>
            </CenterDiv>
        </HeaderOnlyLayoutWrapper>
    )
}

export default SignUp