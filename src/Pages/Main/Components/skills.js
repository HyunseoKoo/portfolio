import { styled } from "styled-components";

function Skills() {
    return (
        <S.Wrap>
            <div>스킬들</div>
        </S.Wrap>
    )
}

export default Skills;

const Wrap = styled.div`
    background-color: #FFD400;
    width: 100vw;
    height: 50vh;
    margin-top: 100px;
    z-index: 110;
`;

const S = {
    Wrap,
}