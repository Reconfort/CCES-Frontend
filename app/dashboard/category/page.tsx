import React from 'react';
import CategoryTable, {Category} from "@/components/tables/CategoryTable";
import {FilterOption} from "@/components/ui/TableFilter";
import {IoIosAdd} from "react-icons/io";

const dummyData: Category[] = [
    {
        id: 'water-issues',
        name: 'Water Supply Issues',
        description: 'Issues related to water supply, quality, or distribution',
        count: 56,
        routingAgency: 'Water & Sanitation Department'
    },
    {
        id: 'electricity',
        name: 'Electricity Problems',
        description: 'Issues related to electricity supply, outages, or billing',
        count: 97,
        routingAgency: 'Electricity Services Agency'
    },
    {
        id: 'road-maintenance',
        name: 'Road Maintenance',
        description: 'Issues related to roads, potholes, street lights, or traffic signals',
        count: 124,
        routingAgency: 'Transportation Department'
    },
    {
        id: 'waste-management',
        name: 'Waste Management',
        description: 'Issues related to garbage collection, waste disposal, or recycling',
        count: 85,
        routingAgency: 'Environmental Services'
    },
    {
        id: 'public-safety',
        name: 'Public Safety',
        description: 'Issues related to public safety, security, or law enforcement',
        count: 63,
        routingAgency: 'Department of Public Safety'
    }
];

const categoryFilterOptions: FilterOption[] = [
    {id: 'water-sanitation', label: 'Water & Sanitation', count: 56},
    {id: 'electricity', label: 'Electricity', count: 97},
    {id: 'transportation', label: 'Transportation', count: 124},
    {id: 'environment', label: 'Environment', count: 85},
    {id: 'public-safety', label: 'Public Safety', count: 63}
];

const Page = () => {
    return (
        <main className={'w-full'}>
            <div className={'flex justify-between items-start'}>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Categories</h1>
                    <p className="text-gray-600">
                        Manage complaint categories for proper routing and assignment.
                    </p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <IoIosAdd size={18}/> Add New Category
                </button>
            </div>

            <CategoryTable data={dummyData}/>
        </main>
    );
};

export default Page;