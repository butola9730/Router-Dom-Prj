import React from 'react'
import Footer from './Footer/footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Layout