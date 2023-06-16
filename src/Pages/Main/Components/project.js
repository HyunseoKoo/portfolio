import { styled } from "styled-components";

function Project() {
    return (
        <S.Wrap>
            <S.Title>PROJECT</S.Title>
            <S.ContentBox>1</S.ContentBox>
            <S.ContentBox>2</S.ContentBox>
            <S.ContentBox>3</S.ContentBox>
        </S.Wrap>
    )
}

export default Project;

const Wrap = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #003458;
    padding: 10px
`;

const Title = styled.div`
    width: max-content;
    font-size: 50px;
    margin: 0 auto;
    padding-top: 50px;
`

const ContentBox = styled.div`
    width:  60%;
    height: 50vh;
    margin: 60px auto;
    border-radius: 10px;
    background-color: white;
`;

const S = {
    Wrap,
    Title,
    ContentBox,
}