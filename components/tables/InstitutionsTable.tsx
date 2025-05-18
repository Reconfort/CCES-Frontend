'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Table, Column } from '@/components/ui/Table';

export interface Institution {
    id: string;
    name: string;
    serviceType: string;
    email: string;
    phone: string;
}

interface InstitutionsTableProps {
    data: Institution[];
}

const InstitutionsTable: FC<InstitutionsTableProps> = ({ data }) => {
    const columns: Column<Institution>[] = [
        { header: 'Institution Name', accessor: 'name', headerClassName: 'font-medium text-gray-900 dark:text-white' },
        { header: 'Service Type', accessor: 'serviceType' },
        {
            header: 'Contact Email',
            cell: (row) => <a href={`mailto:${row.email}`} className="hover:underline">{row.email}</a>,
        },
        {
            header: 'Contact Phone',
            cell: (row) => <a href={`tel:${row.phone}`} className="hover:underline">{row.phone}</a>,
        },
        {
            header: 'Actions',
            headerClassName: 'text-right',
            className: 'text-right',
            cell: (row) => (
                <Link href={`/dashboard/institutions/${row.id}`} className="text-blue-600 hover:underline">
                    View
                </Link>
            ),
        },
    ];

    return <Table<Institution> columns={columns} data={data} rowKey="id" />;
};

export default InstitutionsTable;