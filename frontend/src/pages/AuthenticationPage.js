import {AuthenticationForms} from "../components";

function AuthenticationPage() {
    return (
        <section className="min-h-screen w-full bg-login-hero bg-no-repeat bg-cover bg-left-top	 relative after:content-[''] after:absolute after:w-full after:h-full after:bg-slate-800/80 flex items-center justify-center">
            <AuthenticationForms />
        </section>
    );
}

export default AuthenticationPage