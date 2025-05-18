import React from 'react';
import Breadcrumb from "@/components/ui/Breadcrumb";

const TopHead = () => {
    return (
        <div className={'w-full flex justify-between items-center wrapper'}>
            <Breadcrumb />
            <div className={'flex items-center gap-2'}>
                <span className={'text-sm text-slate-500'}>Welcome back, User!</span>
            </div>
        </div>
    );
};

export default TopHead;