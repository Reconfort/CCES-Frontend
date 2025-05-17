import React, { FC } from 'react';
import Container from "@/component/layout/Container";

const Header: FC = () => {
    return (
        <header className="w-full fixed top-0 z-50">
            <Container>
                <p>Hello world</p>
            </Container>

        </header>
    );
};

export default Header;
