import { css } from "styled-components";

export const Section = css`
    padding: 4rem;
    text-align: center;
    @media screen and (max-width: 768px) {
        padding: 5rem 2rem;
    }
`;

export const Title = css`
    font-size: 2.5rem;
    text-align: center;
    color: ${({theme}) => theme.color.darkblue};
    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`
export const Description = css`
    font-size: 1.5rem;
    margin: 0.5rem 0;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const MaxContainer = css`
    max-width: ${({theme}) => theme.size.maxWidth};
    margin: auto;
`;