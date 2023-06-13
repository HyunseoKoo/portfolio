import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { styled } from "styled-components";

function Layout() {
    return (
        <S.Wrap>
            <Header />
            <S.ContentWrap>
                <Outlet />
            </S.ContentWrap>
            <S.FooterWrap>
                <Footer />
            </S.FooterWrap>
        </S.Wrap>
    )
}

export default Layout;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
`;

const ContentWrap = styled.div`
	/* min-height: 100vh; */
	position: relative;
    height: 100%;
`;

const FooterWrap = styled.div`
    width: 100;
    position: relative;
	bottom: 0;

`;

const S = {
    Wrap,
    ContentWrap,
    FooterWrap
};