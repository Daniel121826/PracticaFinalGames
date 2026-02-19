import React from "react";
import CategoryDropdown from "../molecules/CategoryDropdown";
import PlataformDropdown from "../molecules/PlataformDropdown";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


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
        <nav className="flex items-center justify-between px-6 py-6 bg-red-900 text-white shadow-md">
            {/* Logo a la izquierda */}
            <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={Logo} alt="Pirata Logo" className="h-20 w-20" /> {/* más grande */}
                    <span className="font-bold text-5xl">FreePirate</span> {/* más grande */}
                </Link>
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



