import React from 'react';
import { styled } from 'styled-components';
import { Section } from '../../../Styles/common';

export default function Introduce() {
    return (
        <S.IntroduceContainer>
            <S.IntroduceBox>
                
            </S.IntroduceBox>
        </S.IntroduceContainer>
    );
}

const IntroduceContainer = styled.section`
    ${Section};
`;

const IntroduceBox = styled.div`
    margin: 2rem 3rem;
    background-color : orange;
    width: 100%;
    height: 300px;
`;

const S = {
    IntroduceContainer,
    IntroduceBox
}