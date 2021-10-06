import styled from "styled-components";

const DivBanner = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
const ImgWarpperBanner = styled.div`
    overflow: hidden;
    width: 100%;
    height: 500px;
`;
const ImgBanner = styled.img`
    width: 100%;
`;

const H1Banner = styled.h1`
    transition: 100ms;
    :hover{
        text-decoration: underline;
    }
`;

const SpanBanner = styled.span`
    word-break: break-all;
`;

export {
    DivBanner,
    ImgWarpperBanner,
    ImgBanner,
    H1Banner,
    SpanBanner
}