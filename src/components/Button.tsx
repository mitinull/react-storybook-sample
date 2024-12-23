import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  const buttonClass = `py-2 px-4 font-semibold rounded-lg focus:outline-none 
    ${variant === 'primary' 
      ? 'bg-primary text-white hover:bg-opacity-80' 
      : 'bg-secondary text-gray-800 hover:bg-opacity-80'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    transition-colors duration-200`;

  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};
