import { FC } from "react";
import styled from "styled-components";
import { DivBanner, H1Banner, ImgWarpperBanner, SpanBanner } from "../../styles";
import { Post } from "../../types";
import Link from "next/link";
import { titleToLink } from "../../lib";

type Props = {
    post: Post
}

const ImgWarper = styled.div`
    overflow: hidden;
    height: 300px;
`;

const Img = styled.img`
    display: flex;
`;

const PreviewContent: FC<Props> = ({ post }) => (
    <DivBanner>
        <ImgWarper>
            <Img src={post.image} alt={post.title} />
        </ImgWarper>
        <H1Banner>
            <Link href={titleToLink(post.title)}>
                <a href="">
                    {post.title}
                </a>
            </Link>
        </H1Banner>
        <SpanBanner>
            {post.content}
        </SpanBanner>
    </DivBanner>
)

export {
    PreviewContent
}