import Link from "next/link";
import { H1Banner } from "../../styles";

const GoBack = () => (
    <Link href="/">
        <H1Banner>
            <a href="">
                go back
            </a>
        </H1Banner>
    </Link>
)

export {
    GoBack
}