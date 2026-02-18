import React from "react";
import CategoryDropdown from "../molecules/CategoryDropdown";
import PlataformDropdown from "../molecules/PlataformDropdown";

interface NavbarProps {
    categories: string[];
    platforms: string[];
    onSelectCategory: (category: string) => void;
    onSelectPlatform: (platform: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
    categories,
    platforms,
    onSelectCategory,
    onSelectPlatform,
}) => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
            {/* Logo a la izquierda */}
            <div className="flex items-center space-x-2">
                <img src="/pirate-logo.png" alt="Pirata Logo" className="h-10 w-10" />
                <span className="font-bold text-xl">Free2Play Explorer</span>
            </div>

            {/* Dropdowns a la derecha */}
            <div className="flex space-x-4 items-center">
                <CategoryDropdown
                    categories={categories}
                    onSelectCategory={onSelectCategory}
                />
                <PlataformDropdown
                    plataform={platforms}
                    onSelectPlataform={onSelectPlatform}
                />
            </div>
        </nav>
    );
};

export default Navbar;



