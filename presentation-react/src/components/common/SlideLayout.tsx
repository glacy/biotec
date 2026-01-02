import { ReactNode } from 'react';

interface SlideLayoutProps {
    children: ReactNode;
    className?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = '' }) => {
    return (
        <div className={`w-full min-h-screen lg:min-h-full flex flex-col relative ${className}`}>
            {children}
        </div>
    );
};

export default SlideLayout;
