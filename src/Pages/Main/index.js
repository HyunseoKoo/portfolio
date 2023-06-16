import { styled } from "styled-components";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/skills";
import Archiving from "./Components/archiving";
import Project from "./Components/project";
import Career from "./Components/career";

function MainPage() {
    return (
        <S.Wrap>
            <S.BackgroundZone>
                <S.Content1>-구현서-</S.Content1>
                <div>웹 개발자 포트폴리오</div>
                <div>셀프 동기부여를 잘하며 즐겁게 공부하는 사람입니다.</div>
            </S.BackgroundZone>
            <AboutMe />
            <Skills />
            <Archiving />
            <Project />
            <Career />
        </S.Wrap>
    )
}

export default MainPage;

const Wrap = styled.div`
    box-sizing: border-box;
    width: 100;
    height: 100%;
    position: sticky;
`;

const BackgroundZone = styled.div`
    box-sizing: border-box;
    position: relative;
    & > ::after {
        box-sizing: border-box;
        width: 100%;
        height: 80vh;
        content: "";
        background: url(/Img/background3.jpg);
        background-size: cover;
        opacity: 0.3;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        & > div:nth-child(2) {
            z-index: 0;
            margin-top: 30px;
        }
    }
`;

const Content1 = styled.div`
    /* position: relative;
    top: 30px; */
`;

const S = {
    Wrap,
    BackgroundZone,
    Content1
};