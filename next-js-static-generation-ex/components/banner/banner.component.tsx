import { FC } from "react";
import styled from "styled-components";
import { Post } from "../../types";
import Link from "next/link";
import { DivBanner, H1Banner, ImgBanner, ImgWarpperBanner, SpanBanner } from "../../styles";
import { titleToLink } from "../../lib";

type Props = {
    post: Post
}

const Banner: FC<Props> = ({ post }) => (
    <DivBanner>
        <ImgWarpperBanner>
            <ImgBanner src={post.image} alt={post.content} />
        </ImgWarpperBanner>
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
    Banner
}