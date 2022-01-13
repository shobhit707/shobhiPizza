import React, { Children } from 'react'
import NewNavbar from './NewNavbar'
import Footer from './Footer'
const Layot = ({children}) => {
    return (
        <>
            <NewNavbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layot
