import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const Layout = ({ children }: any) => {
    return (
        <div className='app'>
            <Sidebar />
            <div className='app_container'>
                <Navbar />
                {children}
            </div>

        </div>
    )
}

export default Layout
