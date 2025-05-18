import Link from 'next/link';
import React, {FC} from 'react';

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    className?: string;
    href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({icon, label, className, href, ...etc}) => {
    return (
        <Link href={href} className={`flex items-center gap-2 w-full p-2 rounded-lg hover:bg-white duration-1000 border border-transparent hover:border-slate-50 hover:shadow-xl shadow-slate-100 ${className}`} {...etc}>
            <div className={'bg-black text-white size-9 rounded-md flex justify-center items-center'}>
                {icon}
            </div>
            <span className={'text-sm'}>{label}</span>
        </Link>
    );
};

export default SidebarItem;