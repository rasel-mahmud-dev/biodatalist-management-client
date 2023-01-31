import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import {useSelector} from "react-redux";
import HomeSearchBioDataForm from "components/HomeSearchBioDataForm";

export default function Home() {

    const state = useSelector(state=>state)


    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <HomeSearchBioDataForm />

        </div>
    )
}
