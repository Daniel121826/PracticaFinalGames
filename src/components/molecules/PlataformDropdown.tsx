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
            <span className="cursor-pointer px-4 py-2 hover:text-yellow-400 font-semibold">
                Plataformas
            </span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-50 min-w-[150px] p-1">
                {plataform.map((plat) => (
                    <li
                        key={plat}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded"
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