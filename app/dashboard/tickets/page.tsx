'use client';

import React, { useState } from 'react';
import TicketsTable, { Ticket } from "@/components/tables/TicketsTable";
import TableFilter, { FilterOption } from "@/components/ui/TableFilter";
import { MdImportExport } from "react-icons/md";

// Example tickets data
const dummyData: Ticket[] = [
    {
        id: 'TKT-2023-001',
        title: 'Water supply interrupted for 3 days',
        category: 'Water Supply Issues',
        status: 'new',
        priority: 'high',
        submittedBy: 'John Doe',
        assignedTo: '',
        createdAt: '2023-05-15T10:30:00Z',
        updatedAt: '2023-05-15T10:30:00Z'
    },
    {
        id: 'TKT-2023-002',
        title: 'Street light not working on Main St',
        category: 'Road Maintenance',
        status: 'assigned',
        priority: 'medium',
        submittedBy: 'Jane Smith',
        assignedTo: 'Maintenance Team',
        createdAt: '2023-05-14T09:15:00Z',
        updatedAt: '2023-05-15T14:20:00Z'
    },
    {
        id: 'TKT-2023-003',
        title: 'Garbage not collected for a week',
        category: 'Waste Management',
        status: 'in-progress',
        priority: 'medium',
        submittedBy: 'Robert Johnson',
        assignedTo: 'Environmental Services',
        createdAt: '2023-05-13T16:45:00Z',
        updatedAt: '2023-05-16T11:10:00Z'
    },
    {
        id: 'TKT-2023-004',
        title: 'Power outage in Downtown area',
        category: 'Electricity Problems',
        status: 'resolved',
        priority: 'urgent',
        submittedBy: 'Susan Williams',
        assignedTo: 'Electricity Services Agency',
        createdAt: '2023-05-12T20:30:00Z',
        updatedAt: '2023-05-13T08:45:00Z'
    },
    {
        id: 'TKT-2023-005',
        title: 'Pothole causing accidents on Highway 7',
        category: 'Road Maintenance',
        status: 'closed',
        priority: 'high',
        submittedBy: 'Michael Brown',
        assignedTo: 'Transportation Department',
        createdAt: '2023-05-10T14:20:00Z',
        updatedAt: '2023-05-17T16:30:00Z'
    }
];

// Filter options by status
const statusFilterOptions: FilterOption[] = [
    { id: 'new', label: 'New', count: 1, checked: true },
    { id: 'assigned', label: 'Assigned', count: 1, checked: true },
    { id: 'in-progress', label: 'In Progress', count: 1, checked: true },
    { id: 'resolved', label: 'Resolved', count: 1 },
    { id: 'closed', label: 'Closed', count: 1 }
];

// Filter options by priority
const priorityFilterOptions: FilterOption[] = [
    { id: 'low', label: 'Low', count: 0 },
    { id: 'medium', label: 'Medium', count: 2, checked: true },
    { id: 'high', label: 'High', count: 2, checked: true },
    { id: 'urgent', label: 'Urgent', count: 1, checked: true }
];

// Filter options by category
const categoryFilterOptions: FilterOption[] = [
    { id: 'water-issues', label: 'Water Supply Issues', count: 1, checked: true },
    { id: 'electricity', label: 'Electricity Problems', count: 1, checked: true },
    { id: 'road-maintenance', label: 'Road Maintenance', count: 2, checked: true },
    { id: 'waste-management', label: 'Waste Management', count: 1, checked: true },
    { id: 'public-safety', label: 'Public Safety', count: 0 }
];

const TicketsPage = () => {
    const [filteredData, setFilteredData] = useState(dummyData);

    const handleStatusFilterChange = (selectedIds: string[]) => {
        console.log('Selected status filters:', selectedIds);
        // Implement actual filtering logic here
    };

    const handlePriorityFilterChange = (selectedIds: string[]) => {
        console.log('Selected priority filters:', selectedIds);
        // Implement actual filtering logic here
    };

    const handleCategoryFilterChange = (selectedIds: string[]) => {
        console.log('Selected category filters:', selectedIds);
        // Implement actual filtering logic here
    };

    return (
        <main className="w-full wrapper">

            <div className={'flex justify-between items-start'}>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Complaints & Feedback</h1>
                    <p className="text-gray-600">
                        Manage and respond to citizen complaints and feedback.
                    </p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <MdImportExport size={18}/>Export Report
                </button>
            </div>

            <div className="mb-4 flex items-center justify-between">
                <div className="flex space-x-2">
                    <TableFilter
                        title="Filter by Status"
                        options={statusFilterOptions}
                        onFilterChange={handleStatusFilterChange}
                    />
                    <TableFilter
                        title="Filter by Priority"
                        options={priorityFilterOptions}
                        onFilterChange={handlePriorityFilterChange}
                    />
                    <TableFilter
                        title="Filter by Category"
                        options={categoryFilterOptions}
                        onFilterChange={handleCategoryFilterChange}
                    />
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="grid grid-cols-5 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">Total</p>
                        <p className="text-2xl font-bold text-blue-600">5</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">New</p>
                        <p className="text-2xl font-bold text-blue-600">1</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">In Progress</p>
                        <p className="text-2xl font-bold text-yellow-600">2</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">Resolved</p>
                        <p className="text-2xl font-bold text-green-600">1</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">Closed</p>
                        <p className="text-2xl font-bold text-gray-600">1</p>
                    </div>
                </div>
            </div>

            <TicketsTable data={filteredData} />
        </main>
    );
};

export default TicketsPage;