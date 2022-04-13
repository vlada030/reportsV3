function LoginForm({activeForm}) {
    const activeClass =
        activeForm === "Prijava" ? "h-auto visible opacity-1 " : "h-0 invisible opacity-0";

    return (
        <div className={`bg-tfkable-300 ${activeClass} transition-opacity duration-200`}>
            <form id="loginForm" className="p-8">
                <h2 className="">Prijava</h2>
                <div>
                    <div className="">
                        <input type="text" name="email" className="" />
                    </div>

                    <div className="">
                        <input type="password" name="password" className="" />
                    </div>

                    <button type="submit">Pošalji</button>
                </div>

                <button>Zaboravili ste šifru?</button>
            </form>
        </div>
    );
}

export default LoginForm