import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface IPageLinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

const PageLink: FC<IPageLinkProps> = ({ to, children, className }) => {
    return (
        <NavLink to={to} className={className}> {children} </NavLink>
    );
}

export default PageLink;