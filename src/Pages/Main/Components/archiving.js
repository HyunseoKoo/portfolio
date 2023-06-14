import { styled } from "styled-components";

function Archiving() {
    return (
        <S.Wrap>
            <S.Title>Archiving</S.Title>
            <S.Flex>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
            </S.Flex>
        </S.Wrap>
    )
    
}

export default Archiving;

const Wrap = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 80vh;
    background-color: darkred;
`;

const Title = styled.div`
    width: max-content;
    font-size: 50px;
    margin: 0 auto;
    padding-top: 50px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-top: 80px;
`

const ContentBox = styled.div`
    width: 35vw;
    height: 45vh;
    background-color: white;
    border-radius: 10px;
`;

const S = {
    Wrap,
    Flex,
    Title,
    ContentBox
}