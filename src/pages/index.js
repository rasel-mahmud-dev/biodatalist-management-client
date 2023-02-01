import Head from 'next/head';
import UserStatistics from "components/HomePage/UserStatistics";
import Banner from "components/HomePage/Banner";
import Services from "components/HomePage/Services";

export default function Home() {


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

            <section className="container pb-20">
                <Services/>
            </section>

        </div>
    )
}
