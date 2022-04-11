import { useState } from "react";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { AuthenticationButton } from ".";

export default function AuthenticationForms() {
    const [active, setActive] = useState('Login')

    const handleButtonClick = (operation) => {
        console.log(`Kliknuto je dugme ${operation}`);
        setActive(operation)
    }

    return (
        <div className="w-11/12 rounded z-10">
            <AuthenticationButton
                operation="Login"
                handleButtonClick={handleButtonClick}
                active
            >
                <AiOutlineUser className="w-12 h-auto" />
            </AuthenticationButton>

            <div className="hidden">LOGIN_FORM</div>

            <AuthenticationButton
                operation="Register"
                handleButtonClick={handleButtonClick}
                active
            >
                <AiOutlineUsergroupAdd className="w-12 h-auto" />
            </AuthenticationButton>

            <div className="hidden">REGISTER_FORM</div>

            <AuthenticationButton
                operation="Forgot Password"
                handleButtonClick={handleButtonClick}
                active
            >
                <RiLockPasswordLine className="w-12 h-auto" />
            </AuthenticationButton>

            <div className="hidden">RESET_PASSWORD_FORM</div>
            <div className="h-48 bg-login-form bg-no-repeat bg-cover bg-center rounded"></div>
        </div>
    );
}
