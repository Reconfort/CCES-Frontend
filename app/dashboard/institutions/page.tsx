import React from 'react';
import InstitutionsTable, {Institution} from "@/components/tables/InstitutionsTable";
import {IoIosAdd} from "react-icons/io";

const dummyData: Institution[] = [
    {
        id: 'water-dept',
        name: 'Water & Sanitation Department',
        serviceType: 'Water Supply',
        email: 'water@example.gov',
        phone: '+1234567890',
    },
    {
        id: 'electricity-dept',
        name: 'Electricity Services Agency',
        serviceType: 'Electricity',
        email: 'electricity@example.gov',
        phone: '+0987654321',
    },
];

const Page = () => {
    return (
        <main className={'w-full wrapper'}>
            <div className={'flex justify-between items-start'}>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Institutions</h1>
                    <p className="text-gray-600">
                        Manage Institutions for proper routing and assignment.
                    </p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <IoIosAdd size={18}/> Add New Institution
                </button>
            </div>
            <InstitutionsTable data={dummyData}/>
        </main>
    );
};

export default Page;