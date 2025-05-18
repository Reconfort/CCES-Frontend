
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Category {
    id: string;
    label: string;
    count: number;
    checked?: boolean;
}

const categories: Category[] = [
    { id: 'apple',     label: 'Apple',     count: 56 },
    { id: 'fitbit',    label: 'Fitbit',    count: 56 },
    { id: 'dell',      label: 'Dell',      count: 56 },
    { id: 'asus',      label: 'Asus',      count: 97,  checked: true },
    { id: 'logitech',  label: 'Logitech',  count: 97,  checked: true },
    { id: 'msi',       label: 'MSI',       count: 97,  checked: true },
    { id: 'bosch',     label: 'Bosch',     count: 176, checked: true },
    { id: 'sony',      label: 'Sony',      count: 234 },
    { id: 'samsung',   label: 'Samsung',   count: 76,  checked: true },
    { id: 'canon',     label: 'Canon',     count: 49 },
    { id: 'microsoft', label: 'Microsoft', count: 45 },
    { id: 'razor',     label: 'Razor',     count: 49 },
];

const TableFilter: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            <button
                onClick={() => setOpen(prev => !prev)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium  border border-slate-300 text-slate-600 bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Filter by category
                <svg
                    className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                            Category
                        </h6>
                        <ul className="space-y-2 text-sm text-gray-900 dark:text-gray-100">
                            {categories.map(({ id, label, count, checked }) => (
                                <li key={id} className="flex items-center">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        defaultChecked={checked}
                                        className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-primary-600"
                                    />
                                    <label htmlFor={id} className="ml-2 font-medium">
                                        {label} ({count})
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TableFilter;