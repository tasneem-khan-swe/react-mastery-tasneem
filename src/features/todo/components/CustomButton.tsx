import React from 'react'
import type { ButtonProps } from '../types'

export const CustomButton: React.FC<ButtonProps> = ({ className, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`text-sm text-white px-3 py-1 ${className}`}
        >
            {label}
        </button>
    )
}
