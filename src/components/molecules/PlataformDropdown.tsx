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

            {/* Lista de plataformas en grid de 2 columnas */}
            <ul className="absolute hidden group-hover:grid bg-white text-black mt-2 rounded shadow-lg z-50 min-w-[250px] p-2">
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