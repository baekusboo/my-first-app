import React from 'react';
import {StyledTitle, StyledButton, ButtonGroup, StyledFormArea, colors} from '../components/Styles';

const Dashboard = () => {
    return (
        <div>
            <StyledFormArea bg = {colors.theme }>
            <StyledTitle size={65}>Welcome User!</StyledTitle>
            <ButtonGroup>
                <StyledButton to="/profile" >Update Profile</StyledButton>
            </ButtonGroup>
            </StyledFormArea>
        </div>
    );
};

export default Dashboard;