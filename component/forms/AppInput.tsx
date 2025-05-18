'use client';
import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

interface AppInputProps {
    label: string;
    name: string;
    type?: string;
    className?: string;
}

const AppInput: FC<AppInputProps> = ({ label, name, type = "text", className = '' }) => {
    return (
        <div className="w-full group">
            <label className="text-sm font-normal">{label}</label>
            <Field
                name={name}
                type={type}
                className={`bg-white px-4 py-3 rounded-lg w-full mt-2  border border-transparent duration-300 group-hover:border-blue-500 ${className}`}
            />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm pt-2" />
        </div>
    );
};

export default AppInput;
