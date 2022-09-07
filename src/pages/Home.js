import React from 'react';
import {StyledTitle, StyledSubTitle, StyledButton, ButtonGroup} from '../components/Styles';

const Home = () => {
    return (
        <div>

            <StyledTitle size={65}>Welcome to My App</StyledTitle>
            <StyledSubTitle size={27}>Feel free to use!</StyledSubTitle>
            <ButtonGroup>
                <StyledButton to="/login" >Login</StyledButton>
                <StyledButton to="/signup" >Sign up</StyledButton>
            </ButtonGroup>

        </div>
    );
}

export default Home;