import Head from 'next/head';
import UserStatistics from "components/HomePage/UserStatistics";
import Banner from "components/HomePage/Banner";
import Services from "components/HomePage/Services";

export default function Home() {


    return (
        <div className="">
            <Head>
                <title>Home page of Biodata Management</title>
                <meta name="description" content="Rasel Mahmud Portfolio website"/>
                <meta name="keywords" content="Rasel Mahmud, Rasel Mahmud portfolio, rasel.mahmud.dev, rasel"/>
                <meta name="author" content="Rasel Mahmud"/>
            </Head>

            <section className="banner relative">
                <Banner/>
            </section>

            <div className="h-20"></div>

            <section className="container">
                <UserStatistics className="stats"/>
            </section>

            <section className="container pb-20">
                <Services/>
            </section>

        </div>
    )
}
