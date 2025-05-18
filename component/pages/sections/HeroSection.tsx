import React from 'react';
import Container from "@/component/layout/Container";
import Link from "next/link";
import { IoMdArrowDown } from 'react-icons/io';
import ComplainForm from "@/component/features/ComplainForm";

const HeroSection = () => {
    return (
        <section id={'/'} className={'bg-slate-200 min-h-[80vh] rounded-b-[100px] pt-[102px]'}>
            <Container className={'flex flex-col justify-start items-start pb-12'}>
                <h1 className={'text-6xl md:text-7xl lg:text-8xl font-extralight text-slate-700 w-[65vw] md:w-[420px] lg:w-[920px]'}>
                    Your Voice. <span className={'text-black font-light'}>Your City.</span> One Click Away.
                </h1>
                <p className={'py-4 font-medium text-lg text-black'}>Submit feedback, track issues, and help build a better community – all from your phone or computer.</p>
                <div className={'flex'}>
                    <Link href={'/#HowItWork'} className={'px-12 py-6 bg-black text-white rounded-full text-sm flex items-center gap-4'}>
                        See How It Works
                        <IoMdArrowDown size={16} className={'animate-bounce'}/>
                    </Link>
                </div>
                <ComplainForm/>
            </Container>
        </section>
    );
};

export default HeroSection;