import { styled } from "styled-components";

function Footer() {
    return (
        <S.Wrap>Footer</S.Wrap>
    )
}

export default Footer;

const Wrap = styled.div`
    width: 100%;
    height: 20vh;
    position: absolute;
    border: solid 1px blue;
    box-sizing:border-box;
`;

const S = {
    Wrap,
};