import React, { memo } from 'react';
import styled from 'styled-components';

const BtnWrapper = styled.div`
    width: 500px;
    height: 30px;
`;
const BtnElem = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 100%;
`;

const Btn = ({btnHandler, text}) => {
    return (
        <BtnWrapper>
            <BtnElem onClick={btnHandler}>{text}</BtnElem>
        </BtnWrapper>
    );
};

export default memo(Btn);