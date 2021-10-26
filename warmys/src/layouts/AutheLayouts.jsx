import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main >{children}</main>
            
        </div>
    )
}

export default AuthLayout;