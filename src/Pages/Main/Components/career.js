import { styled } from "styled-components";

function Career() {
    return (
        <S.Wrap>
            <S.Title>Career</S.Title>
            <S.Flex>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox2></S.ContentBox2>
            </S.Flex>
        </S.Wrap>
    )
    
}

export default Career;

const Wrap = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #e9e9e9;
    padding-bottom: 100px;
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
    width: 55%;
    margin: 0 auto;
    margin-top: 80px;
`

const ContentBox = styled.div`
    width: 33%;
    height: 80vh;
    background-color: white;
    border-right: solid 3px #a9a9a9;
`;

const ContentBox2 = styled.div`
    width: 65%;
    height: 80vh;
    background-color: white;
`;

const S = {
    Wrap,
    Flex,
    Title,
    ContentBox,
    ContentBox2
}