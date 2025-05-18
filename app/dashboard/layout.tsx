import React, {FC} from 'react';
import {AppSidebar} from "@/components/layout/Sidebar";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TopHead from "@/components/layout/TopHead";

interface  LayoutProps {
    children: React.ReactNode;
}

const Layout : FC<LayoutProps> = ({children}) => {
    return (
        <main className={'min-h-screen w-screen flex'}>
            <AppSidebar/>
            <div className={'w-full flex flex-col p-2 lg:p-4'}>
                <TopHead/>
                <div className={'w-full flex flex-col gap-4 mt-4 flex-1'}>
                {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;