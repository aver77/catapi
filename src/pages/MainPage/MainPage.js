import React, { useState } from 'react';
import styled from 'styled-components';

import CheckBox from './components/CheckBox';
import Btn from './components/Btn';
import ImgWrap from './components/ImgWrap';
import { useCallback } from 'react';

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MainWrapper = styled.div``;

const MainPage = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [changeCat, setChangeCat] = useState(false);

    const isEnabledHandler = useCallback((e) => {
        e.target.checked?setIsEnabled(true):setIsEnabled(false);
    }, [])
    const isSetRandomHandler = useCallback((e) => {
        e.target.checked?setIsRandom(true):setIsRandom(false);
    }, [])

    const btnHandler = useCallback(() => {
        if (isEnabled) {
            setChangeCat(!changeCat);
        }
    }, [changeCat, isEnabled])
    
    return (
        <Main>
            <MainWrapper>
                <CheckBox onChangeHandler={isEnabledHandler} id="enabled-checkbox" text="Enabled"/>
                <CheckBox onChangeHandler={isSetRandomHandler} id="refresh-checkbox" text="Auto-refresh every 5 second" mt="20px"/>
                <Btn btnHandler={btnHandler} text="Get cat"/>
                { isEnabled?<ImgWrap isEnabled={isEnabled} isRandom={isRandom} changeCat={changeCat}/> : <></> }
            </MainWrapper>
        </Main>
    );
};
export default MainPage;