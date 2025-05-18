import React from "react";
import Logo from "@/components/ui/Logo";
import ItemSeparator from "@/components/ui/ItemSeparator";

import SidebarItem from "@/components/ui/SidebarItem";
import { GrHomeRounded } from "react-icons/gr";
import { LuTicketSlash } from "react-icons/lu";
import { TbBuildingCommunity } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";


// Menu items.
const items = [
    {
        title: "Tickets",
        url: "tickets",
        icon: <LuTicketSlash size={16}/>,
    },
    {
        title: "Institution",
        url: "institutions",
        icon: <TbBuildingCommunity size={16}/>,
    },
    {
        title: "Users",
        url: "users",
        icon: <FiUsers size={16}/>,
    }
]

export function AppSidebar() {
    return (
        <div className={'w-[280px] bg-white flex flex-col justify-start items-start gap-4 p-4'}>
            {/*Logo*/}
            <Logo/>
            <ItemSeparator/>

            <SidebarItem icon={<GrHomeRounded size={16}/>} href={'/dashboard'} label={'Dashboard'}/>

            <div className={'flex flex-col justify-start items-start gap-4 w-full'}>
                <h1 className={'uppercase text-xs text-slate-600'}>Institution</h1>
                {items.map((item) => (
                    <SidebarItem key={item.title} icon={item.icon} href={`/dashboard/${item.url}`} label={item.title}/>
                ))}
            </div>

            <div
                className={'flex flex-col justify-start items-start gap-0 w-full rounded-xl p-4 shadow-2xl bg-cover bg-center'}
                style={{
                    background: "url('https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D')",
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                }}
            >
                <div className={'bg-white size-8 rounded-md flex justify-center items-center'}>
                    <TiDocumentText size={24}/>
                </div>
                <h2 className={'mt-6 text-sm text'}>Need help?</h2>
                <p className={'text-sm'}>Please check our docs</p>

                <button className={'bg-white hover:bg-black hover:text-white duration-1000 cursor-pointer p-2 text-xs rounded-md w-full mt-2'}>
                    DOCUMENTATION
                </button>
            </div>

        </div>
    )
}
