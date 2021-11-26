import React from 'react';
import styled from 'styled-components';

import errPic from '../../images/errorPic.png';

const ErrorWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorPic = styled.img`
    width: 84px;
    height: 84px;
`;

const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorPic src={errPic} alt={"error"}/>
        </ErrorWrapper>
    );
};

export default Error;