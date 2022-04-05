import { useEffect } from "react";
import { useGlobalContext } from "../context/global_context";
import bezZvuka240pCompressedMP4 from "../assets/video/bezZvuka240pCompressedMP4.mp4";
import bezZvuka240pCompressedWEBM from "../assets/video/bezZvuka240pCompressedWEBM.webm";
import TFKable_transparent from "../assets/TFKable_transparent.png";
import FKZ from "../assets/FKZ.png"
import { Link } from "react-router-dom";

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
                    <img src={TFKable_transparent} className="h-12" alt="logo_TF Kable"/>
                    <img src={FKZ} className="h-12" alt="logo_FKZ"/>
                </div>

                <div className="text-center mx-2">
                    <h1 className="text-2xl text-fkz-700 text-shadow-fkz tracking-wider mb-6">
                        TF Kable
                        <span className="block text-3xl mt-4">
                            Fabrika Kablova Zaječar doo
                        </span>
                    </h1>
                    <p>
                        Proizvodnja svih vrsta instalacionih provodnika i
                        distributivnih kablova po najstrožijim standardima!
                    </p>
                </div>

                <div className="text-xl tracking-wider text-center ">
                    <Link
                        className="block text-tfkable-700 hover:text-fkz-700 transition duration-200 mb-4"
                        to="izvestaji"
                    >
                        Izveštaji
                    </Link>
                    <Link
                        className="block text-tfkable-700 hover:text-fkz-700 transition duration-200 mb-4"
                        to="kontakt"
                    >
                        Kontakti
                    </Link>
                    <Link
                        className="block text-tfkable-700 hover:text-fkz-700 transition duration-200"
                        to="pocetna"
                    >
                        Preskoči
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
