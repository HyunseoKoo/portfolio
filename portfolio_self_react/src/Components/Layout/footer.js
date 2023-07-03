import { styled } from "styled-components";
import { Section } from "../../Styles/common";

function MainFooter() {
    return (
        <S.FooterContainer class="section" id="contact">
            <S.Title>Contact me!</S.Title>
            <S.Description>📮 koohs414@gmail.com</S.Description>
            <S.Description>☎︎ 010-3353-7844</S.Description>
            <ul class="contact__links">
                <li>
                    <a class="contact__link" href="https://github.com/HyunseoKoo" target="_blank" title="깃허브주소">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a class="contact__link" href="https://github.com/HyunseoKoo" target="_blank" title="velog주소">
                        <i class="fa-solid fa-blog"></i>
                    </a>
                </li>
            </ul>
    </S.FooterContainer>
    )
}

export default MainFooter;

const FooterContainer = styled.footer`
    ${Section};
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

const ContactLinks = styled.ul`
    
`;

const S = {
    FooterContainer,
    Title,
    Description,
    ContactLinks
}