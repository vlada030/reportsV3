import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/global_context";
import {BsBoxArrowInRight} from 'react-icons/bs'
import { GiMoneyStack, GiRotaryPhone } from "react-icons/gi";

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
            <div className="absolute inset-0 w-full h-full bg-tfkable-500/75 flex flex-col justify-evenly">
                <div className="w-4/5 max-w-lg mx-auto flex items-center justify-between">
                    <img
                        src={TFKable_transparent}
                        className="h-12 md:h-16 lg:20 w-auto"
                        alt="logo_TF_Kable"
                    />
                    <img
                        src={FKZ}
                        className="h-12 md:h-16 lg:20 w-auto"
                        alt="logo_FKZ"
                    />
                </div>

                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-fkz-700 text-shadow-fkz tracking-wider">
                        TF Kable
                        <span className="block text-3xl md:text-4xl lg:text-5xl mt-4">
                            Fabrika Kablova Zaječar doo
                        </span>
                    </h1>
                </div>

                <div className="w-full max-w-2xl mx-auto text-center">
                    <p className="text-xl lg:text-2xl text-light uppercase tracking-wider leading-10 bg-tfkable-700 rounded-md mobile-landscape-position shadow-xl lg:p-4">
                        najpovoljnije&nbsp;cene prepoznatljiv&nbsp;kvalitet
                    </p>
                </div>

                <div className="lg:w-[42rem] mx-auto text-xl lg:text-2xl text-fkz-700 text-shadow-fkz tracking-wider text-center lg:flex lg:items-center lg:justify-between">
                    <Link
                        className="text-fkz-700 hover:text-fkz-300 transition duration-200 mb-4 lg:mb-0 flex items-center justify-start"
                        to="izvestaji"
                    >
                        <GiMoneyStack className="w-8 lg:w-12 h-auto mr-4" />
                        Cenovnik
                    </Link>
                    <Link
                        className="text-fkz-700 hover:text-fkz-300 transition duration-200 mb-4 lg:mb-0 flex items-center justify-start"
                        to="kontakt"
                    >
                        <GiRotaryPhone className="w-8 lg:w-12 h-auto mr-4" />
                        Kontakti
                    </Link>
                    <Link
                        className=" text-fkz-700 hover:text-fkz-300 transition duration-200 flex items-center justify-center "
                        to="pocetna"
                    >
                        Početna
                        <BsBoxArrowInRight className="w-8 lg:w-12 h-auto ml-4 mt-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
