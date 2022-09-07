import styled from 'styled-components';

//react router
import {Link} from 'react-router-dom';

export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#f3f4f6",
    light2: "#e5e7eb",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#dc2626"
}

//styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0C0A25 ;
    background-size: cover;
    background-attachment: fixed;
`;

//home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
        //opacity: 0.8;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

//inputs

export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 20px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}
    
    &:focus{
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
        //opacity: 0.8;
    }
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color? props.color: colors.dark2)}px;
    padding: 2px;
    margin-top: 10px;

`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
        //opacity: 0.8;
    }
`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`;