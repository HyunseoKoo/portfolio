import { styled } from "styled-components";


function Header() {
    return(
        <S.Wrap>
            <S.Title>KHS's Portfolio</S.Title>
            <S.MenuWrap>
                <div>About me</div>
                <div>Skills</div>
                <div>Archiving</div>
                <div>Projects</div>
                <div>Career</div>
            </S.MenuWrap>
        </S.Wrap>
    )
};

export default Header;

const Wrap = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 10vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20%;
    z-index: 100;
    color: brown;
`;

const Title = styled.div`
    width: max-content;
    font-size: 30px;
`;

const MenuWrap = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    & > div {
        cursor: pointer;
    }
`;

const S = {
    Wrap,
    Title,
    MenuWrap
};