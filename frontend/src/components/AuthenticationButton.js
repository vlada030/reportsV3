export default function AuthenticationButton({
    children,
    operation,
    handleButtonClick,
    activeForm,
}) {
    const colorClass =
        activeForm === operation ? "bg-fkz-700" : "bg-fkz-300 hover:bg-fkz-500";

    return (
        <div className="border-b border-slate-400">
            <button
                className={`w-full flex flex-col items-center justify-center py-8 ${colorClass} transition-colors duration-200`}
                onClick={() => handleButtonClick(operation)}
            >
                {children}
                <span className="text-xl">{operation}</span>
            </button>
        </div>
    );
}