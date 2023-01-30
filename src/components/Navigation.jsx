import React from 'react';
import Link from "next/link";
import Button from "components/Button";

const Navigation = () => {

    return (
        <div className="bg-white shadow-xl">
            <header className="flex justify-between container mx-auto items-center">
                <div>
                    <img className="w-14" src="/icons/bio.png" alt=""/>
                    
                </div>
                <nav>
                    <ul className="flex items-center gap-x-4 py-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Button className="" variant="outline"><Link href="/auth/login">Login</Link></Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navigation;