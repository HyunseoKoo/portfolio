import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../home";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MainAbout from "../about";
import MainSkills from "../skills";
import MainProjects from "../projects";
import MainArchive from "../archive";
import MainFooter from "./footer";
import { useScroll } from 'framer-motion';
import { motion } from "framer-motion";
import "../home.css";
import { useEffect, useState } from "react";

function MainHeader() {
    const { scrollYProgress } = useScroll();
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);


    return (
        <S.Header more={scrollPosition > 69}>
            <motion.div className="bar" style={{ scaleX: scrollYProgress }} />
            <S.HeaderLogo>
                <S.HeaderLogoTitle>Hyunseo's Portfolio</S.HeaderLogoTitle>
            </S.HeaderLogo>
            <S.HeaderNav>
                <S.HeaderMenu>
                    <li><S.HeaderMenuItem href = {<Home />}>Home</S.HeaderMenuItem></li>
                    <li><S.HeaderMenuItem href = {<MainAbout />}>About</S.HeaderMenuItem></li>
                    <li><S.HeaderMenuItem href = {<MainSkills />}>Skills</S.HeaderMenuItem></li>
                    <li><S.HeaderMenuItem href = {<MainProjects />}>Projects</S.HeaderMenuItem></li>
                    <li><S.HeaderMenuItem href = {<MainArchive />}>Archive</S.HeaderMenuItem></li>
                    <li><S.HeaderMenuItem href = {<MainFooter />}>Contact</S.HeaderMenuItem></li>
                </S.HeaderMenu>
            </S.HeaderNav>
            <S.HeaderToggle aria-label="navigation menu toggle">
                <FontAwesomeIcon icon={faBars}/>
            </S.HeaderToggle>
        </S.Header>
    )
}

export default MainHeader;

const Header = styled.header`
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    transition: all 300ms ease;
    background-color: ${({more})=> more ? "#0a1d37" : "transparent"};
    box-shadow: ${({more})=> more ? "rgba(0, 0, 0, 0.7) 0px 3px 8px" : "none"}
`;

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const HeaderLogoImg = styled.img`
    width: 36px;
    height: 36px;
`;

const HeaderLogoTitle = styled.h1`
    font-size: 1.8rem;
    color: ${({theme}) => theme.color.text};
`;

const HeaderNav = styled.nav`
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const HeaderMenu = styled.ul`
    display: flex;
    gap: 4px;
    @media screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        text-align: center;
        margin: 1rem 4rem;
        gap: 1rem;
    }
`;

const HeaderMenuItem = styled.a`
    color: ${({theme}) => theme.color.text};
    display: block;
    padding: 8px 16px;
    border-bottom: 1px solid transparent;
    :hover {
        border-bottom: 1px solid ${({theme}) => theme.color.accent};
    }
`;

const HeaderToggle = styled.button`
    display: none;
    font-size: 1.5rem;
    position: absolute;
    top: 1.3rem;
    right: 1rem;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const S ={
    Header,
    HeaderLogo,
    HeaderNav,
    HeaderLogoImg,
    HeaderLogoTitle,
    HeaderMenu,
    HeaderMenuItem,
    HeaderToggle
};