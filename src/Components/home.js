import styled from "styled-components";
import { Section } from "../Styles/common";
import { motion } from "framer-motion";
import "./home.css";
import TypingText from "../Animation/TypingText";
import { useState } from "react";

function Home() {
    const [src, setSrc] = useState("images/profile.png")
    const onClickImg = () => {
        setSrc("images/selfi.jpeg")
        if(src === "images/selfi.jpeg") {
            setSrc("images/profile.png")
        }
    }
    return(
        <S.Container id='home'>
            <TypingText 
                completionWord= "Click me! ⬇️" 
                speed={200} 
                fontSize="1.25rem"
                color="skyblue" 
            />
            <motion.img
                className="HomeAvatar"
                onClick={onClickImg}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                src={src} 
                alt="profile" />
            <S.HomeTitle>안녕하세요, <br /><S.HomeTitleStrong>구현서</S.HomeTitleStrong>입니다 </S.HomeTitle>
            <S.HomeDescription>매일매일 성장하는 프론트엔드 개발자가 되고 싶습니다 :)</S.HomeDescription>
            <S.HomeContact href="#about">Contact me</S.HomeContact>
        </S.Container>
    )
}

export default Home;

const Container = styled.section`
    /* background-color: ${({theme}) => theme.color.primary}; */
    background: linear-gradient(to bottom, #0a1d37, white);
    color: ${({theme}) => theme.color.text};
    padding: 5rem 1rem;
    padding-top: 7rem;
    text-align: center;
    ${Section};
`;

const HomeAvatar = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    background-color: white;
    border: 3px solid ${({theme}) => theme.color.accent};
    border-radius: 80%;
`;

const HomeTitle = styled.h2`
    font-size: 2.5rem;
    margin: 2rem 0;
`;

const HomeTitleStrong = styled.strong`
    color: ${({theme}) => theme.color.sub};
`;

const HomeDescription = styled.p`
    font-size: 1.3rem;
`;

const HomeContact = styled.a`
    display: inline-block;
    background-color: ${({theme}) => theme.color.sub};
    color: ${({theme}) => theme.color.text};
    margin: 2rem;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 4px;
    :hover {
    background-color: transparent;
    color: ${({theme}) => theme.color.text};
    outline: 2px solid ${({theme}) => theme.color.accent};
    }
`;

const S = {
    Container,
    HomeAvatar,
    HomeTitle,
    HomeTitleStrong,
    HomeDescription,
    HomeContact
};