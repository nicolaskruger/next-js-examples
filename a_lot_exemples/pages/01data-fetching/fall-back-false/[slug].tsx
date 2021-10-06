import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { getAllPath } from "../../../lib"

type Param = {
    slug: string
}

type Return = {
    name: string
}

const Post: NextPage<Return> = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
    const paths = await getAllPath();

    return {
        paths: paths.map(path => ({
            params: { slug: path }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<Return, Param> = async ({ params }) => {
    return {
        props: {
            name: params?.slug as string
        }
    }
}

export default Post
