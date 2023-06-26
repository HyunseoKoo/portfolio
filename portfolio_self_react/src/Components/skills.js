import { styled } from "styled-components";
import { MaxContainer, Section } from "../Styles/common";

function MainSkills() {

    return (
        <S.SkillsContainer>
            <S.SkillsMaxContainer>
                <S.Title>My Skills</S.Title>
                <S.Description>Skills & Attributes</S.Description>
                {/* <p>어필하고 싶은 스킬, 강점, 프로그래밍 지식</p> */}
                <S.Skills>
                    <S.SkillsCoding>
                        <S.SkillsTitle>Coding Skills</S.SkillsTitle>
                        <ul>
                            <S.Bar>
                                <S.BarMetadata><span>HTML</span><span>95%</span></S.BarMetadata>
                                <S.BarBg><S.BarValue style={{width: "95%"}}></S.BarValue></S.BarBg>
                            </S.Bar>
                            <S.Bar>
                                <S.BarMetadata><span>HTML</span><span>95%</span></S.BarMetadata>
                                <S.BarBg><S.BarValue style={{width: "985"}}></S.BarValue></S.BarBg>
                            </S.Bar>
                            <S.Bar>
                                <S.BarMetadata><span>CSS</span><span>95%</span></S.BarMetadata>
                                <S.BarBg><S.BarValue style={{width: "95%"}}></S.BarValue></S.BarBg>
                            </S.Bar>
                            <S.Bar>
                                <S.BarMetadata><span>JavaScript</span><span>90%</span></S.BarMetadata>
                                <S.BarBg><S.BarValue style={{width: "90%"}}></S.BarValue></S.BarBg>
                            </S.Bar>
                            <S.Bar>
                                <S.BarMetadata><span>React</span><span>80%</span></S.BarMetadata>
                                <S.BarBg><S.BarValue style={{width: "80%"}}></S.BarValue></S.BarBg>
                            </S.Bar>
                            <S.Bar>
                                <S.BarMetadata><span>Web APIs</span><span>80%</span></S.BarMetadata>
                                <S.BarBg><S.BarValue style={{width: "80%"}}></S.BarValue></S.BarBg>
                            </S.Bar>
                        </ul>
                    </S.SkillsCoding>
                    <S.SkillsTools>
                        <S.SkillsTitle>Tools</S.SkillsTitle>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Git & GitHub</li>
                            <li>Figma</li>
                            <li>Notion</li>
                            <li>Discord</li>
                        </ul>
                    </S.SkillsTools>
                </S.Skills>
            </S.SkillsMaxContainer>
        </S.SkillsContainer>
    )
}

export default MainSkills;

const SkillsContainer = styled.section`
    background-color: ${({theme}) => theme.color.variant};
    color: ${({theme}) => theme.color.text};
    ${Section};
`;

const SkillsMaxContainer = styled.div`
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

const Skills = styled.div`
    display: grid;
    grid-template-columns: 6fr 4fr;
    margin: 2rem 3rem;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const SkillsCoding = styled.section`
    grid-row: span 1;
    padding: 1rem;
    background-color: ${({theme}) => theme.color.primary};
`;

const SkillsTitle = styled.h3`
    color: ${({theme}) => theme.color.accent};
    margin: 1rem 0;
    font-size: 1.2rem;
`;

const SkillsTools = styled.section`
    padding: 1rem;
    background-color: ${({theme}) => theme.color.primary};
    filter: brightness(80%);
    line-height: 3rem;
`;

const Bar = styled.li`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
`;

const BarMetadata = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BarBg = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${({theme}) => theme.color.variant};
`;

const BarValue = styled.div`
    height: 3px;
    background-color: ${({theme}) => theme.color.accent};
`;

const S = {
    SkillsContainer,
    SkillsMaxContainer,
    Title,
    Description,
    Skills,
    SkillsCoding,
    SkillsTitle,
    SkillsTools,
    Bar,
    BarMetadata,
    BarBg,
    BarValue,
}