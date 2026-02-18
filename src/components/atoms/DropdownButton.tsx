import React from "react";

interface DropdownButtonProps {
    label: string;
    onClick: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            {label}
        </button>
    );
};

export default DropdownButton;
