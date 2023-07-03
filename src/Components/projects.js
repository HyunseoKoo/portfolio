import styled from "styled-components";
import { MaxContainer, Section } from "../Styles/common";

function MainProjects() {

    return(
        <S.ProjectsContainer id='projects'>
            <S.ProjectsMaxContainer>
                <S.Title>Project</S.Title>
                <S.Description>프론트엔드 스택을 활용하여 만든 프로젝트들입니다.</S.Description>
                <S.Projects>
                    <S.Project>
                        <S.ProjectImg src="images/projects/줍줍마켓.png" alt="메인프로젝트"/>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #1</S.ProjectMetadataTitle>
                            <p>중고거래 서비스 웹사이트 [Zoopzoop Market]</p>
                            <div>줍줍마켓은 사용자가 활동 지역을 설정하고 상품을 등록하여 유저간 판매 및 구매 활동을 할 수 있도록 서비스를 제공하는 중고거래 웹사이트입니다.
                                 자유롭게 거래할 수 있도록 실시간 채팅과 가계부 확인, 시세 조회 및 리뷰 등록 기능을 제공합니다.
                            </div>
                            <ul>
                                <li>✏️ 주요 스택 <p>react-router-dom & react-query & axios & socket-io & styled-components</p></li>
                                <li>👀 구경하기 <p><a href="https://zoopzoop-market.vercel.app/">배포 사이트로 이동</a></p></li>
                                <li>🔗 깃허브 <p><a href="https://github.com/HyunseoKoo/React_Final_Project">코드 보러가기</a></p></li>
                                <li>📝 블로그 <p><a href="https://velog.io/@koohs414/React-Project-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%EC%84%9C%EB%B9%84%EC%8A%A4-Zoopzoop-Market">프로젝트 회고록으로 이동</a></p></li>
                            </ul>
                        </S.ProjectMetadata>
                    </S.Project>
                    <S.Project>
                        <S.ProjectImg src="images/projects/무비트레일러.png" alt="메인프로젝트"/>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #2</S.ProjectMetadataTitle>
                            <p style={{color: "pink"}}>영화 트레일러 웹사이트 [movie CAT-CHA]</p>
                            <div>
                                'The Movie Database' 오픈 Api를 활용하여 사용자에게 영화 정보를 제공하는 영화 소개 웹사이트입니다. <br/>
                                인기차트, 개봉 예정/상영작 모아보기 기능과 원하는 영화 검색 기능을 제공합니다. 
                            </div>
                            <ul>
                                <li>✏️ 주요 스택 <p>axios / styled-compnents / open-api</p></li>
                                <li>👀 구경하기 <p><a href="https://react-movie-trailer-project.vercel.app/">베포 사이트로 이동</a></p></li>
                                <li>🔗 깃허브 <p><a href="https://github.com/Frontend-TEAM1/React_Movie_Trailer_project">코드 보러 가기</a></p></li>
                            </ul>
                        </S.ProjectMetadata>
                    </S.Project>
                    <S.Project>
                        <S.ProjectImg src="images/projects/project3.webp" alt="메인프로젝트"></S.ProjectImg>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #3</S.ProjectMetadataTitle>
                            <p>react-query를 활용한 youtube 클론코딩 (작업중)</p>
                        </S.ProjectMetadata>
                    </S.Project>
                    <S.Project>
                        <S.ProjectImg src="images/projects/project4.webp" alt="메인프로젝트"/>
                        <S.ProjectMetadata>
                            <S.ProjectMetadataTitle>Project #4</S.ProjectMetadataTitle>
                            <p>웹스토리지를 활용한 검색기능 구현 (작업중)</p>
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
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: bold;
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
    background-color: black;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: all 250ms ease-in;
    transform: translateY(-10px);
    cursor: pointer;
    &:hover {
    opacity: 0.8;
    transform: translateY(0px);
    }
    & > p  {
        font-size: 1.5rem;
        padding: 10px 0;
        color: lime;
    }
    & > div {
        font-size: 0.8rem;
        line-height: 1.2rem;
        padding-bottom: 10px;
        text-align: left;
    }
    & > ul {
        text-align: left;
        padding-top: 30px;
    }
    & > ul > li {
        padding-bottom: 10px;
        font-size: 1rem;
        & > p {
            font-size: 1rem;
            padding-left: 30px;
            & > a {
            &:hover {
                color: yellow;
        }
    }}}
`;

const ProjectMetadataTitle = styled.h3`
&:after {
    content: '';
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 0.5rem 0;
    width: 70px;
    height: 2px;
    background-color: ${({theme}) => theme.color.variant};
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