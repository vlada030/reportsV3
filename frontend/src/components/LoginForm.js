import { AiOutlineMail } from "react-icons/ai";

function LoginForm({activeForm}) {
    const activeClass =
        activeForm === "Prijava" ? "h-auto visible opacity-1 " : "h-0 invisible opacity-0";

    return (
        <div
            className={`bg-fkz-100 ${activeClass} transition-opacity duration-200`}
        >
            <form id="loginForm" className="p-8">
                <h2 className="text-2xl text-center mb-8">Unesite podatke:</h2>
                <div className="mb-8">
                    <div className="flex items-center justify-center bg-fkz-100 p-2 mb-4 rounded-md">
                        <AiOutlineMail className="w-6 h-auto mr-2" />
                        <input
                            type="text"
                            name="email"
                            className="w-full outline-none bg-transparent"
                            placeholder="Email"
                        />
                    </div>

                    <div className="relative mb-4">
                        <input
                            type="password"
                            name="password"
                            className="w-full"
                        />
                    </div>

                    <button type="submit">Pošalji</button>
                </div>

                <button>Zaboravili ste šifru?</button>
            </form>
        </div>
    );
}

export default LoginForm