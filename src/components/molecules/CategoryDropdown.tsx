import React from "react";

interface CategoryDropdownProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
    categories,
    onSelectCategory,
}) => {
    return (
        <div className="relative group">
            {/* Botón principal */}
            <span className="cursor-pointer px-4 py-2 hover:text-yellow-400 font-semibold text-xl">
                Categorías
            </span>

            {/* Lista de categorías en grid de 2 columnas */}
            <ul className="absolute hidden group-hover:grid grid-cols-2 gap-2 bg-red-500 text-white mt-2 rounded shadow-lg z-50 min-w-[250px] p-2">
                {categories.map((cat) => (
                    <li
                        key={cat}
                        className="px-4 py-2 cursor-pointer rounded"
                        onClick={() => onSelectCategory(cat)}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryDropdown;


