import image from "next/image";
import { IMAGE } from "../../constant/img/img.constant";
import { Post } from "../../types";

const { AIKO, PUNPUN, SACHI } = IMAGE;

const titleToId = (title: string) => title.toLowerCase().replace(" ", "-");

const titleToLink = (title: string) => `/posts/${titleToId(title)}`

const getAllPost = (): Post[] => (
    [
        {
            title: "Onodera Punpun",
            content: "lorem ".repeat(100),
            image: PUNPUN
        },
        {
            title: "Aiko Tanaka",
            content: "lorem".repeat(100),
            image: AIKO
        },
        {
            title: "Sachi Nanjo",
            content: "lorem".repeat(100),
            image: SACHI
        }
    ]
)

const getAllPaths = () => getAllPost().map(post => titleToId(post.title));

const getPostById = (id: string) => getAllPost().find(post => titleToId(post.title) === id);

export {
    getAllPost,
    getPostById,
    getAllPaths,
    titleToLink
}