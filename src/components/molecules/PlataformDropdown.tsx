import React from "react";

interface PlataformDropdownProps {
    plataform: string[];
    onSelectPlataform: (plataform: string) => void;
}

const PlataformDropdown: React.FC<PlataformDropdownProps> = ({
    plataform,
    onSelectPlataform,
}) => {
    return (
        <div className="relative group">
            {/* Botón principal */}
            <span className="cursor-pointer px-4 py-2 hover:text-yellow-400 font-semibold text-xl">
                Plataformas
            </span>

            <ul className="absolute top-full right-0 hidden group-hover:block bg-red-500 text-white mt-2 rounded shadow-lg z-50 min-w-37.5 p-1">
                {plataform.map((plat) => (
                    <li
                        key={plat}
                        className="px-4 py-2 cursor-pointer rounded"
                        onClick={() => onSelectPlataform(plat)}
                    >
                        {plat}
                    </li>
                ))}
            </ul>



        </div>
    );
};

export default PlataformDropdown;