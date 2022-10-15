import React from 'react';
import axios from 'axios';

import { StyledFormArea, StyledFormButton, StyledTitle, StyledSubTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from '../components/Styles';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

const Signup = () => {
    return (
        <div>
            <StyledFormArea>
                <StyledTitle color= {colors.theme} size= {30} >Member Sign Up</StyledTitle>
                <StyledSubTitle color={colors.theme}>Please enter the details correctly</StyledSubTitle>
                <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                validationSchema = {
                    Yup.object({
                        name: Yup.string().required("Required"),
                        email: Yup.string().email("Invalid email.").required("Required."),
                        password: Yup.string().min(8,"Password is too short.").max(30,"Password is too long.").required("Required."),
                        repeatPassword: Yup.string().required("Required.").oneOf([Yup.ref("password")], "Passwords must match.")
                    })
                }

                onSubmit= {async (values, {setSubmitting}) => {
                    console.log(values);

                    const {repeatPassword, ...data} = values;
                    const result = await axios.post("http://localhost:4000/app/signup", data).catch((error) => {
                        if (error && error.response)
                        console.log("Error: ",error);
                    });

                    if (result && result.data){
                        alert("Registration Successful!");
                        console.log("Data: ",result.data);
                        //window.location = '/login';
                    }

                    setSubmitting(false);

                }}
                >
                    {() => (
                        <Form>
                            <TextInput
                            name="name"
                            type="text"
                            label="Name"
                            placeholder="Guvi"
                            />
                            <TextInput
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="guvi@email.com"
                            />
                            <TextInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="********"
                            />
                            <TextInput
                            name="repeatPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="********"
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Sign Up
                                </StyledFormButton>
                            </ButtonGroup>

                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Existing user? <TextLink to="/login" >Login!</TextLink>
                </ExtraText>

            </StyledFormArea>
            <CopyrightText>
                All Rights Reserved &copy; 2022
            </CopyrightText>
        </div>
    );
}

export default Signup;