import React, {FC} from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout :FC<LayoutProps> = ({children}) => {
    return (
        <main
            className={'w-screen h-screen bg-center bg-cover flex justify-center md:justify-end items-end md:items-center'}
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1489640818597-89b1edc97db5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
            <div className={'bg-white/30 border-2 border-white/60 backdrop-blur md:right-10 mb-4 p-8 max-h-[800px] w-[94vw] md:w-[560px] xl:w-[620px] rounded-3xl duration-200 hover:shadow-2xl'}>
                {children}
            </div>
        </main>
    );
};

export default Layout;