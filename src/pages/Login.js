import React from 'react';
import axios from 'axios';

import {StyledFormArea, StyledFormButton, StyledTitle, StyledSubTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from '../components/Styles';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <StyledTitle color= {colors.theme} size= {30} >Member Login</StyledTitle>
                <StyledSubTitle color={colors.theme}>Please enter the details correctly</StyledSubTitle>
                <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema = {
                    Yup.object({
                        email: Yup.string().email("Invalid email.").required("Required."),
                        password: Yup.string().min(8,"Password is too short.").max(30,"Password is too long.").required("Required."),
                    })
                }

                onSubmit= {async (values, {setSubmitting}) => {
                    console.log(values);

                    const {...data} = values;
                    const result = await axios.post("http://localhost:4000/app/login", data).catch((error) => {
                        if (error && error.response){
                        console.log("Error: ",error);
                        }
                    });

                    //console.log("header: ", result.data.header);

                    if (result.data.status === 'ok')
                    {
                        console.log("Got the token: ",result.data.data)
                        //localStorage.setItem('token', result.data.data)
                        //localStorage.setItem('token', result.data.token)
                        localStorage.setItem('token', result.data.data)
                       // console.log(result)
                        alert("Login Successful.")
                        window.location = '/dashboard';
                    }
                    else{
                        alert("Incorrect Email / Incorrect Password.")
                        console.log("Error = Wrong login details ")
                       // console.log(result.header)
                    }
        
                   setSubmitting(false);

                }}
                >
                    {() => (
                        <Form>
                            <TextInput
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="abc@email.com"
                            />
                            <TextInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="********"
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>

                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New user? <TextLink to="/signup" >Sign Up!</TextLink>
                </ExtraText>

            </StyledFormArea>
            <CopyrightText>
                All Rights Reserved &copy; 2022
            </CopyrightText>
        </div>
    );
}

export default Login;