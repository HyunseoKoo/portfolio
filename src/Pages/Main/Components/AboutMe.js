import { styled } from "styled-components";

function AboutMe() {
    return (
        <S.Wrap>
            <S.Content1>ABOUT ME</S.Content1>
            <S.Flex>
                <S.Flex1>
                    <S.Flex2>
                        <div>이모지</div>
                        <div>
                            <S.ContentDetail>이름</S.ContentDetail>
                            <div>구현서</div>
                        </div>
                    </S.Flex2>
                    <S.Flex2>
                        <div>이모지</div>
                        <div>
                            <S.ContentDetail>생년월일</S.ContentDetail>
                            <div>95.04.14</div>
                        </div>
                    </S.Flex2>
                    <S.Flex2>
                        <div>이모지</div>
                        <div>
                            <S.ContentDetail>주소지</S.ContentDetail>
                            <div>경기도 화성시 동탄</div>
                        </div>
                    </S.Flex2>
                </S.Flex1>
            </S.Flex>

            <S.Flex>
                <S.Flex1>
                    <S.Flex2>
                        <div>이모지</div>
                        <div>
                            <S.ContentDetail>연락처</S.ContentDetail>
                            <div>010-3353-7844</div>
                        </div>
                    </S.Flex2>
                    <S.Flex2>
                        <div>이모지</div>
                        <div>
                            <S.ContentDetail>이메일</S.ContentDetail>
                            <div>koohs414@naver.com</div>
                        </div>
                    </S.Flex2>
                    <S.Flex2>
                        <div>이모지</div>
                        <div>
                            <S.ContentDetail>학력</S.ContentDetail>
                            <div>중앙대 (국제물류학)</div>
                        </div>
                    </S.Flex2>
                </S.Flex1>
            </S.Flex>
        </S.Wrap>
    )
}

export default AboutMe;

const Wrap = styled.div`
    width: 100vw;
    height: 40vh;
    margin: 80vh auto 0;
    border: solid 1px red;
    & > div {
        width: max-content;
        margin: 0 auto;
        z-index: 1000;
    }
`;

const Content1 = styled.div`
    font-size: 3rem;
    padding-bottom: 100px;
`;

const Flex = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Flex1 = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
`

const Flex2 = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
        padding-right: 30px;
    }
`

const ContentDetail = styled.div`
    padding-bottom: 10px;
`;

const S = {
    Wrap,
    Content1,
    Flex1,
    Flex2,
    Flex,
    ContentDetail

}