export default function AuthenticationButton({
    children,
    operation,
    handleButtonClick,
    active,
}) {
    const updatedClass =
        active === operation
            ? "w-full bg-tfkable-300 flex flex-col items-center justify-center py-8"
            : "w-full bg-fkz-300 hover:bg-fkz-800 flex flex-col items-center justify-center py-8";

            console.log(updatedClass);

    return (
        <div>
            <button
                className={updatedClass}
                onClick={() => handleButtonClick(operation)}
            >
                {children}
                <span className="text-2xl">{operation}</span>
            </button>
        </div>
    );
}
