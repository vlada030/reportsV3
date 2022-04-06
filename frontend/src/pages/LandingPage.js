import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/global_context";
import {BsBoxArrowInRight} from 'react-icons/bs'

import bezZvuka240pCompressedMP4 from "../assets/video/bezZvuka240pCompressedMP4.mp4";
import bezZvuka240pCompressedWEBM from "../assets/video/bezZvuka240pCompressedWEBM.webm";
import TFKable_transparent from "../assets/TFKable_transparent.png";
import FKZ from "../assets/FKZ.png"

const LandingPage = () => {
    const { firstPageVisit, handleFirstPageVisit } = useGlobalContext();

    useEffect(() => {
        handleFirstPageVisit()
    }, [handleFirstPageVisit])

    return (
        <div className="w-screen h-screen relative">
            <video
                className="h-full w-full object-cover overflow-hidden"
                poster={TFKable_transparent}
                autoPlay
                muted
                loop
            >
                <source src={bezZvuka240pCompressedMP4} type="video/mp4" />
                <source src={bezZvuka240pCompressedWEBM} type="video/webm" />
                Your browser is not supported!
            </video>
            <div className="absolute inset-0 w-full h-full bg-tfkable-500/70 flex flex-col justify-evenly">
                <div className="flex items-center justify-evenly">
                    <img
                        src={TFKable_transparent}
                        className="h-12"
                        alt="logo_TF_Kable"
                    />
                    <img src={FKZ} className="h-12" alt="logo_FKZ" />
                </div>

                <div className="text-center mx-2">
                    <h1 className="text-2xl text-fkz-700 text-shadow-fkz tracking-wider mb-12">
                        TF Kable
                        <span className="block text-3xl mt-4">
                            Fabrika Kablova Zaječar doo
                        </span>
                    </h1>
                    <p className="text-xl text-light uppercase tracking-wider leading-10 bg-tfkable-700 rounded-md skew-y-[-10deg] shadow-xl">
                        najpovoljnije cene prepoznatljiv kvalitet
                    </p>
                </div>

                <div className="text-xl text-fkz-700 text-shadow-fkz tracking-wider text-center lg:w-[1024px] lg:flex lg:items-center lg:justify-center">
                    <Link
                        className="block text-fkz-700 hover:text-fkz-300 transition duration-200 mb-4"
                        to="izvestaji"
                    >
                        Cenovnik
                    </Link>
                    <Link
                        className="block text-fkz-700 hover:text-fkz-300 transition duration-200 mb-4"
                        to="kontakt"
                    >
                        Kontakti
                    </Link>
                    <Link
                        className=" text-fkz-700 hover:text-fkz-300 transition duration-200 inline-flex items-center justify-center "
                        to="pocetna"
                    >
                        Početna
                        <BsBoxArrowInRight className="w-8 h-auto ml-4 mt-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
