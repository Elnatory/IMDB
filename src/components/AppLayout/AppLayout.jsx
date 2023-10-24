import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'

export default function AppLayout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
