import { useState } from "react";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { AuthenticationButton, LoginForm } from ".";

export default function AuthenticationForms() {
    const [activeForm, setActiveForm] = useState('Prijava')

    const handleButtonClick = (operation) => {
        setActiveForm(operation)
    }

    return (
        <div className="w-11/12 rounded overflow-hidden z-10">
            <AuthenticationButton
                operation="Prijava"
                handleButtonClick={handleButtonClick}
                activeForm={activeForm}
            >
                <AiOutlineUser className="w-12 h-auto" />
            </AuthenticationButton>

            <LoginForm activeForm={activeForm} />

            <AuthenticationButton
                operation="Registracija"
                handleButtonClick={handleButtonClick}
                activeForm={activeForm}
            >
                <AiOutlineUsergroupAdd className="w-12 h-auto" />
            </AuthenticationButton>

            <LoginForm activeForm={activeForm} />

            <AuthenticationButton
                operation="Zaboravljena šifra?"
                handleButtonClick={handleButtonClick}
                activeForm={activeForm}
            >
                <RiLockPasswordLine className="w-12 h-auto" />
            </AuthenticationButton>

            <LoginForm activeForm={activeForm} />
            
            <div className="h-48 bg-login-form bg-no-repeat bg-cover bg-center"></div>
        </div>
    );
}
