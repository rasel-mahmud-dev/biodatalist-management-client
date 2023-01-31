import Head from 'next/head';
import {useSelector} from "react-redux";
import UserStatistics from "components/HomePage/UserStatistics";
import Banner from "components/HomePage/Banner";
import Services from "components/HomePage/Services";

export default function Home() {

    const state = useSelector(state => state)

    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <section className="banner relative">
                <Banner/>
            </section>

            <div className="h-20"></div>

            <section className="container">
                <UserStatistics/>
            </section>

            <section className="container">
                <Services/>
            </section>

        </div>
    )
}
