import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    z-index: 4;
    width: 100%;
    height: 100%;
    background-color: #CECECE;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Spinner = styled.div`
    z-index: 5;
    width: 64px;
    height: 64px;
    color: #000;
`

const Loading = () => {
    return (
        <LoadingWrapper>
            <Spinner className="spinner-border" role="status"></Spinner>
        </LoadingWrapper>
    );
};

export default Loading;