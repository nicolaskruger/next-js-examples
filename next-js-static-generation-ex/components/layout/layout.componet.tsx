import { FC } from "react";
import Head from "next/head";

const LayoutComponet: FC = ({ children }) => (
    <div>
        <Head>
            <link rel="icon" href="seky.jpg" />
            <meta
                name="description"
                content="simplem repo to learn static router"
            />
        </Head>
        {children}
    </div>
)

export {
    LayoutComponet
}