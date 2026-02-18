import React from "react";
import CategoryDropdown from "../molecules/CategoryDropdown";

interface NavbarProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ categories, onSelectCategory }) => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
            {/* Logo a la izquierda */}
            <div className="flex items-center space-x-2">
                <img src="/pirate-logo.png" alt="Pirata Logo" className="h-10 w-10" />
                <span className="font-bold text-xl">Free2Play Explorer</span>
            </div>

            {/* Dropdown categorías a la derecha */}
            <div className="flex space-x-4 items-center">
                <CategoryDropdown categories={categories} onSelectCategory={onSelectCategory} />
            </div>
        </nav>
    );
};

export default Navbar;


