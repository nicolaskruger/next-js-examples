import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import { Banner, Container, LayoutComponet } from "../../components";
import { GoBack } from "../../components/go-back/go-back.component";
import { getAllPaths, getPostById } from "../../lib";
import { Post } from "../../types";

type Params = {
    id: string
}
type Return = {
    post: Post
}

const Posts: NextPage<Return> = ({ post }: Return) => {
    return (
        <LayoutComponet>
            <Container>
                <Banner post={post} />
                <GoBack />
            </Container>
        </LayoutComponet>
    )
}


export const getStaticProps: GetStaticProps<Return, Params> = ({ params }) => {
    const post = getPostById(params?.id as string) as Post;

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {

    const paths = getAllPaths();

    return {
        paths: paths.map(path => ({
            params: {
                id: path
            }
        }
        )),
        fallback: false
    }
}

export default Posts