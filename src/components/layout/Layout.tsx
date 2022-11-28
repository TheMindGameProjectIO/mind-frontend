import { FC, ReactNode } from 'react';
import Copyright from '../../components/ui/Copyright';

interface ILayoutProps {
    children: ReactNode;
    header?: boolean;
}

const Layout: FC<ILayoutProps> = ({ children, header = true }) => {
    return (
        <div>
            {header ? <></> : null}
            <div className='flex justify-center'>
                <main className='w-full max-w-main px-6'>
                    {children}
                </main>
            </div>
            <Copyright />
        </div>
    );
}

export default Layout;