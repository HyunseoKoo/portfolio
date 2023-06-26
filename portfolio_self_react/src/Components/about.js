import { styled } from "styled-components";
import { MaxContainer, Section } from "../Styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

function MainAbout() {

    return (
        <S.AboutContainer>
            <S.Title>About me</S.Title>
            <S.Description>
                능동적으로 하고하는 개발자
            </S.Description>
            <S.Description>
                꾸준히 공부하는 개발자
            </S.Description>
            <S.Abouts>
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={faUser} /></S.AboutIcon>
                    <S.AboutTitle>이름</S.AboutTitle>
                    <p>구현서</p>
                </S.About>
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={faCakeCandles} /></S.AboutIcon>
                    <S.AboutTitle>생년월일</S.AboutTitle>
                    <p>95.04.14</p>
                </S.About>
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={faHouse} /></S.AboutIcon>
                    <S.AboutTitle>주소지</S.AboutTitle>
                    <p>경기도 화성시 동탄</p>
                </S.About>
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={faPhone} /></S.AboutIcon>
                    <S.AboutTitle>연락처</S.AboutTitle>
                    <p>010-3353-7844</p>
                </S.About>
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={faEnvelope} /></S.AboutIcon>
                    <S.AboutTitle>이메일</S.AboutTitle>
                    <p>koohs414@gmail.com</p>
                </S.About>
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={faSchool} /></S.AboutIcon>
                    <S.AboutTitle>학력</S.AboutTitle>
                    <p>중앙대학교 국제물류학과</p>
                </S.About>
            </S.Abouts>
        </S.AboutContainer>
    )
}

export default MainAbout;

const AboutContainer = styled.div`
    ${Section};
    ${MaxContainer};
`;

const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    color: ${({theme}) => theme.color.text};
`;

const Description = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem 0;
`;

const Abouts = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 2.5rem 0;
    @media screen and (max-width: 768px) {
        /* flex-direction: column;
        align-items: center; */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`;

const About = styled.li`
    background-color: ${({theme}) => theme.color.white};
    padding: 2rem 1rem;
    color: var(--color-text);
    border-radius: 1rem;
    cursor: default;
    box-shadow: 4px 8px 8px rgba(0,0,0,0.38);
    @media screen and (max-width: 768px) {
        max-width: 15rem;
        min-width: max-content;
        max-height: 10rem;
        padding: 0.5rem 1rem;
    }
`;

const AboutIcon = styled.div`
    font-size: 2rem;
    margin: 1rem 0;
    color: var(--color-accent);
    transition: all 300ms ease;
`;

const AboutTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;



const S = {
    AboutContainer,
    Title,
    Description,
    Abouts,
    About,
    AboutIcon,
    AboutTitle,

}