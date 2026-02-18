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
            <span className="cursor-pointer px-4 py-2 hover:text-yellow-400 font-semibold">
                Categorías
            </span>

            {/* Lista de categorías */}
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-50 min-w-[150px]">
                {categories.map((cat) => (
                    <li
                        key={cat}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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

