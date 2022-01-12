import React, { memo } from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
    margin-top: ${props => props.mt || '0px'}; 
`;

const CheckBoxElem = styled.input`
    margin-right: 5px;
`;
const Label = styled.label``;

const CheckBox = ({onChangeHandler, id, text, mt = null}) => {
    return (
        <CheckBoxWrapper mt={mt}>
            <CheckBoxElem onChange={onChangeHandler} type="checkbox" id={id}/>
            <Label htmlFor={id}>{text}</Label>
        </CheckBoxWrapper>
    );
};

export default memo(CheckBox);