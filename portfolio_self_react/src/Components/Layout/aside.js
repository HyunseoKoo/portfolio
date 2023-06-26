import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import Home from "../home";

function Aside() {
    return(
        <aside>
            <S.ArrowUp href={<Home />} title="back to top">
                <FontAwesomeIcon icon={faArrowUp} />
            </S.ArrowUp>
        </aside>
    )
}

export default Aside;

const ArrowUp = styled.a`
    background-color: ${({theme}) => theme.color.primary};
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    font-size: 3rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 100%;
    text-align: center;
    box-shadow: 4px 8px 8px rgba(0,0,0,0.38);
    transition: opacity 300ms ease-in;
`;

const S = {
    ArrowUp
};