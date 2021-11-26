import React, { useState } from 'react';
import styled from 'styled-components';
import ImgPage from '../ImgPage';

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MainWrapper = styled.div``;

const CheckBoxEnableWrapper = styled.div``;
const CheckBoxRefreshWrapper = styled.div`
    margin-top: 20px;
`;
const CheckBox = styled.input`
    margin-right: 5px;
`;
const Label = styled.label``;

const BtnWrapper = styled.div`
    width: 500px;
    height: 30px;
`;
const Btn = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 100%;
`;

const ImageWrapper = styled.div`
    margin-top: 40px;
    width: 500px;
    height: 500px;
`;

const MainPage = ({catRequested}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [changeCat, setChangeCat] = useState(false);

    const isEnabledHandler = (e) => {
        e.target.checked?setIsEnabled(true):setIsEnabled(false);
    }
    const isSetRandomHandler = (e) => {
        e.target.checked?setIsRandom(true):setIsRandom(false);
    }

    const btnHandler = () => {
        if (isEnabled) {
            setChangeCat(!changeCat);
        }
    }
    
    return (
        <Main>
            <MainWrapper>
                <CheckBoxEnableWrapper>
                    <CheckBox onChange={isEnabledHandler} type="checkbox" id="enabled-checkbox"/>
                    <Label htmlFor="enabled-checkbox">Enabled</Label>
                </CheckBoxEnableWrapper>
                <CheckBoxRefreshWrapper>
                    <CheckBox onChange={isSetRandomHandler} type="checkbox" id="refresh-checkbox"/>
                    <Label htmlFor="refresh-checkbox">Auto-refresh every 5 second</Label>
                </CheckBoxRefreshWrapper>
                <BtnWrapper>
                    <Btn onClick={() => btnHandler()}>Get cat</Btn>
                </BtnWrapper>
                {
                    isEnabled?
                            <ImageWrapper>
                                <ImgPage isEnabled={isEnabled} isRandom={isRandom} changeCat={changeCat}/>
                            </ImageWrapper>
                        :
                            <></>
                }
            </MainWrapper>
        </Main>
    );
};
export default MainPage;