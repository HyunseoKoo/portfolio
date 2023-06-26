import { styled } from "styled-components";
import { MaxContainer, Section } from "../Styles/common";

function MainProjects() {

    return(
        <S.ProjectsContainer>
            <S.ProjectsMaxContainer>
                <S.Title>Project</S.Title>
                {/* <S.Description>설명</S.Description> */}
                <S.Projects>
                    <S.Project>
                        <S.ProjectImg src="images/projects/project1.webp" alt="메인프로젝트"/>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #1</S.ProjectMetadataTitle>
                            <p>React를 활용한 중고거래 서비스 [줍줍마켓] 웹사이트</p>
                        </S.ProjectMetadata>
                    </S.Project>
                    <S.Project>
                        <S.ProjectImg src="images/projects/project2.webp" alt="메인프로젝트"/>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #2</S.ProjectMetadataTitle>
                            <p>개인 프로젝트</p>
                        </S.ProjectMetadata>
                    </S.Project>
                    <S.Project>
                        <S.ProjectImg src="images/projects/project3.webp" alt="메인프로젝트"></S.ProjectImg>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #3</S.ProjectMetadataTitle>
                            <p>Open Api를 활용한 영화 소개 웹사이트</p>
                        </S.ProjectMetadata>
                    </S.Project>
                    <S.Project>
                        <S.ProjectImg src="images/projects/project4.webp" alt="메인프로젝트"/>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #4</S.ProjectMetadataTitle>
                            <p>순수 html, css를 활용한 포트폴리오 웹사이트</p>
                        </S.ProjectMetadata>
                    </S.Project>
                </S.Projects>
            </S.ProjectsMaxContainer>
        </S.ProjectsContainer>
    )
}

export default MainProjects

const ProjectsContainer = styled.section`
    background-color: ${({theme}) => theme.color.primary};
    color: ${({theme}) => theme.color.text};
    ${Section};
`;

const ProjectsMaxContainer = styled.div`
    ${MaxContainer};
`;

const Title = styled.div`
    font-size: 2.5rem;
    text-align: center;
    color: ${({theme}) => theme.color.darkblue};
`;

const Description = styled.div`
    font-size: 1.5rem;
    margin: 0.5rem 0;
`;

const Projects = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
`;

const Project = styled.li`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
`;

const ProjectImg = styled.img`
    width: 100%;
`;

const ProjectMetadata = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.color.accentVariant};
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 250ms ease-in;
    transform: translateY(-10px);
    & :hover {
    opacity: 0.8;
    transform: translateY(0px);
}
`;

const ProjectMetadataTitle = styled.h3`
:after {
    content: '';
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 0.5rem 0;
    width: 70px;
    height: 2px;
    background-color: ${({theme}) => theme.color.variant};
    opacity: 0;
}
`;

const S = {
    ProjectsContainer,
    ProjectsMaxContainer,
    Title,
    Description,
    Projects,
    Project,
    ProjectImg,
    ProjectMetadata,
    ProjectMetadataTitle,

}