import { styled } from "styled-components";
import { MaxContainer, Section } from "../Styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

function MainArchive() {

    return(
        <S.ArchiveContainer>
            <S.Title>Archive</S.Title>
            <S.Description>설명</S.Description>
            <S.Archives>
                <S.Archive>
                    <S.ArchiveIcon><FontAwesomeIcon icon={faGithub} /></S.ArchiveIcon>
                        <S.ArchiveBubble>
                            <p><S.ArchiveBubbleTitle href="https://github.com/HyunseoKoo">github</S.ArchiveBubbleTitle></p>
                            <p>새로운 스킬과 스택을 꾸준히 연습하며 실전 코딩 실력을 높이고자 노력합니다.</p>
                        </S.ArchiveBubble>
                </S.Archive>
                <S.Archive>
                    <S.ArchiveIcon> <FontAwesomeIcon icon={faBlog} /></S.ArchiveIcon>
                    <S.ArchiveBubble>
                        <p><S.ArchiveBubbleTitle href="https://velog.io/@koohs414">velog</S.ArchiveBubbleTitle></p>
                        <p>프론트엔드 관련 동작 원리와 cs 지식을 익히며 기록합니다.</p>
                    </S.ArchiveBubble>
                </S.Archive>
            </S.Archives>
        </S.ArchiveContainer>
    )
}

export default MainArchive;

const ArchiveContainer = styled.section`
    ${Section};
    ${MaxContainer};
`;

const Title = styled.div`
    font-size: 2.5rem;
    text-align: center;
    color: ${({theme}) => theme.color.primary};
`;

const Description = styled.div`
    font-size: 1.5rem;
    margin: 0.5rem 0;
`;

const Archives = styled.ul`
        margin: 3rem;
`;

const Archive = styled.li`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    & :nth-child(even) {
        order: 1;
    }
    ${Section};
    ${MaxContainer};
`;

const ArchiveIcon = styled.div`
    font-size: 3rem;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    order: 1;
`;

const ArchiveBubble = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ArchiveBubbleTitle = styled.a`
    color: ${({theme}) => theme.color.primary};
    font-weight: bold;
`;

const S = {
    ArchiveContainer,
    Title,
    Description,
    Archives,
    Archive,
    ArchiveIcon,
    ArchiveBubble,
    ArchiveBubbleTitle
}