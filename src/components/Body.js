import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FrontPage from './FrontPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div >
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Body