import { styled } from "styled-components";
import { MaxContainer, Section } from "../Styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { motion } from "framer-motion";

function MainAbout() {
    const divRef = useRef(null);
    const info = [
        {
            icon: faUser,
            title: "이름",
            detail: "구현서"
        },
        {
            icon: faCakeCandles,
            title: "생년월일",
            detail: "95.04.14"
        },
        {
            icon: faHouse,
            title: "주소지",
            detail: "경기도 화성시 동탄"
        },
        {
            icon: faPhone,
            title: "연락처",
            detail: "010-3353-7844"
        },
        {
            icon: faEnvelope,
            title: "이메일",
            detail: "koohs414@gmail.com"
        },
        {
            icon: faSchool,
            title: "학력",
            detail: "중앙대학교 국제물류학과"
        },
    ]
    return (
        <S.AboutContainer>
            <S.Title>About me</S.Title>
            <S.Abouts>
                {info.map((item) => (
                    <motion.div
                        ref={divRef}
                        className="box"
                        initial={{ opacity: 0.2 }}
                        whileInView={{
                        opacity: 1,
                        rotate: [0, 360],
                        borderRadius: ["20%", "50%"],
                        transition: { delay: 0.05 }
                        }}
                        whileHover={{
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                    >
                <S.About>
                    <S.AboutIcon><FontAwesomeIcon icon={item.icon} /></S.AboutIcon>
                    <S.AboutTitle>{item.title}</S.AboutTitle>
                    <p>{item.detail}</p>
                </S.About>
            </motion.div>
                ))}
            </S.Abouts>
            <S.Description>
                저는 이런 사람입니다!🙋🏻‍♀️
            </S.Description>
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
    color: ${({theme}) => theme.color.primary};
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
    padding: 1rem;
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