import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import TourPackages from './TourPackages'

function Application() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/login' element={< SignIn />} />
                <Route path='/signup' element={< SignUp />} />
                <Route path='/packages' element={< TourPackages />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Application
