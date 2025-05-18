import React from 'react';
import InstitutionsTable, {Institution} from "@/components/tables/InstitutionsTable";

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
            <InstitutionsTable data={dummyData}/>
        </main>
    );
};

export default Page;