import React, {
    forwardRef,
    HTMLAttributes,
    ReactNode
} from 'react';
import clsx from 'clsx';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx(
                'w-screen flex justify-center items-center',
                className
            )}
            {...props}
        >
            {/* Tailwind’s built-in responsive container */}
            <div className="container mx-auto px-4">
                {children}
            </div>
        </div>
    )
);

Container.displayName = 'Container';

export default Container;