import React from 'react'
import Link from "next/link";
import SocialLinks from "components/SocialLinks";
import Head from "next/head";


function AboutMe() {


    return (
        <section>
            <Head>
                <title>About me</title>
            </Head>
            <div className="container">
                <div className="flex flex-col justify-center items-center mx-2 py-10">

                    <div className="w-32 h-32 md:w-52 md:h-52  overflow-hidden border-4 border-primary/60 rounded-full">
                        <div className="rounded-full ">
                            <img className=""
                                 src="/rasel-mahmud.webp"
                                 alt="" srcSet=""/>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-4">Rasel Mahmud</h2>
                    <h2 className="text-base font-bold text-gray-900 mt-4">A fullstack web developer</h2>

                    <div>
                        <h2 className="text-base font-bold text-gray-900 mt-4 text-center  border-b-2 pb-0 mb-4 border-primary/40">Skills</h2>
                        <ul className="list-disc font-medium text-sm">
                            <li>Typescript</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>Redux</li>
                            <li>Nodejs</li>
                            <li>Mongodb</li>
                            <li>Sass</li>
                            <li>Tailwindcss</li>
                            <li>MaterialUI</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-base text-center font-bold text-gray-900 mt-4 border-b-2 pb-0 mb-4 border-primary/40">Social</h2>
                    <SocialLinks />

                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe