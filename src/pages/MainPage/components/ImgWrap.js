import React, { memo } from 'react';
import styled from 'styled-components';

import ImgPage from '../../ImgPage';

const ImageWrapper = styled.div`
    margin-top: 40px;
    width: 500px;
    height: 500px;
`;

const ImgWrap = ({isEnabled, isRandom, changeCat}) => {
    return (
        <ImageWrapper>
            <ImgPage isEnabled={isEnabled} isRandom={isRandom} changeCat={changeCat}/>
        </ImageWrapper>
    );
};

export default memo(ImgWrap);