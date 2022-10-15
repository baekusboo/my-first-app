import React from 'react';
import axios from 'axios';
import differenceInYears from 'date-fns/differenceInYears';


import { StyledFormArea, StyledFormButton, StyledTitle, StyledSubTitle, ButtonGroup, ExtraText, TextLink, CopyrightText, colors} from '../components/Styles';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

const mobileExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Profile = () => {
    return (
        <div>
            <StyledFormArea>
                <StyledTitle size={65} color= {colors.theme}>Profile Details</StyledTitle>
                <StyledSubTitle size={20} color= {colors.theme}>We would love to get to know you more!</StyledSubTitle>
                <div><br></br></div>
                <Formik
                initialValues={{
                    age: "",
                    dob: new Date(),
                    mobile: "",
                    country: "",
                }}
                validationSchema = {
                    Yup.object({
                        age: Yup.number().required("Required").min(18, "You must be at least 18 years."),
                        dob: Yup.date().required("Required.").test('DOB', 'You must be at least 18 years.', value => {
                            return differenceInYears(new Date(), new Date(value)) >= 18;
                          }),
                        mobile: Yup.string().max(10,"Mobile number too long.").matches(mobileExp, 'Mobile number is not valid').required("Required."),
                        country: Yup.string().required("Required."),
                    })
                }

                onSubmit= {async (values, {setSubmitting}) => {
                    console.log(values);
                    
                    const token = localStorage.getItem('token')
                    //console.log(token)
                    //const {...data} = values , token;
                    
                    const result = await axios.post("http://localhost:4000/app/profile", values, {
                        headers: {
                          'auth-token': token
                        }
                      }
                      ).catch((error)=>{
                        if(error && error.response){ console.log("Access Denied; Error = ",error.message)}
                     });

                    if (result && result.data){
                        console.log("Data = ",result.data);
                        alert("Profile Update Successful!");
                        //localStorage.removeItem('token');
                    }
                    else{
                        alert("Access Denied!");
                    }
                    
                    setSubmitting(false);

                }}
                >
                    {() => (
                        <Form>
                            <TextInput
                            name="age"
                            type="number"
                            label="Age"
                            placeholder="20"
                            />
                            <TextInput
                            name="dob"
                            type="Date"
                            label="Date of Birth"
                            />
                            <TextInput
                            name="mobile"
                            type="text"
                            label="Mobile Number"
                            placeholder="9912345678"
                            />
                            <TextInput
                            name="country"
                            type="text"
                            label="Country"
                            placeholder="India"
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Submit
                                </StyledFormButton>
                            </ButtonGroup>

                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Click here to <TextLink to="/" >Logout</TextLink>
                </ExtraText>

            </StyledFormArea>
            <CopyrightText>
                All Rights Reserved &copy; 2022
            </CopyrightText>
        </div>
    );
}

export default Profile;