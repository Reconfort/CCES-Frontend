import React, { FC } from 'react';
import Container from "@/component/layout/Container";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 pt-1">
            <Container className={'flex justify-between items-center py-3 bg-black text-white rounded-full px-12 pr-4'}>
                <div className={'flex items-center gap-8'}>
                    <h1 className={'text-md font-bold'}>Citizen <span className={'text-blue-500'}>Engagement</span> System</h1>
                <ul className={'flex items-center gap-2 font-medium text-sm'}>
                    <Link href={'/'} className={'px-6 py-3 border rounded-full'}>Home</Link>
                    <Link href={'/#about'} className={'px-2 py-3'}>About</Link>
                    <Link href={'/#FAQ'} className={'px-2 py-3'}>FAQ</Link>
                </ul>
                </div>
                <div className="flex gap-[1px] border border-white p-[1px] rounded-full">
                    <Link href={'/auth/signin'} className={'px-6 py-3  text-white rounded-l-full text-sm'}>
                        Sign in
                    </Link>
                    <Link href={'/auth/signup'} className={'px-6 py-3 bg-white text-black rounded-full text-sm'}>
                        Sign up
                    </Link>
                </div>
            </Container>

        </header>
    );
};

export default Header;
