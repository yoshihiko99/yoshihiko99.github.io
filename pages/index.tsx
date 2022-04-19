import type {NextPage} from 'next'
import Head from 'next/head'
import Navigation from "@/components/Navigation";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Yuta Euchi</title>
            </Head>

            <Navigation/>

            <main>
                <div className="my-3">
                </div>
            </main>
        </div>
    )
}

export default Home
