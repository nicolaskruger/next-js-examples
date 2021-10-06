import { FC } from "react";
import styled from "styled-components";
import { Post } from "../../types";
import { PreviewContent } from "../preview-content/preview-contnent.component";

type Props = {
    posts: Post[]
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Li = styled.li`
    width: 49%;
`;

const Preview: FC<Props> = ({ posts }) => (
    <Ul>
        {posts.map((post, index) => (
            <Li key={index}>
                <PreviewContent post={post} />
            </Li>
        ))}
    </Ul>
)

export {
    Preview
}