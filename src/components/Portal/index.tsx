import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const node = document.getElementById('portal')!;

interface PortalProps {
    className?: string;
    children?: React.ReactNode;
    isScrollDisabled?: boolean;
    onClick?: () => void;
}

const Portal = ({ className, children, isScrollDisabled, onClick }: PortalProps) => {
    // @ts-ignore
    useEffect(() => {
        if (!isScrollDisabled) return;
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'auto');
    }, []);

    return ReactDOM.createPortal(
        <div className={className} onClick={onClick}>
            {children}
        </div>,
        node
    );
};

export default Portal;
