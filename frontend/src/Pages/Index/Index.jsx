import React from 'react'
import Header from '../../Components/Header/Header'
import LastCourses from '../../Components/LastCourses/LastCourses'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PresellCourses from '../../Components/PresellCourses/PresellCourses'
import LastArticles from '../../Components/LastArticles/LastArticles'
import Footer from '../../Components/Footer/Footer'

function Index() {
  return (
    <div>
        <Header></Header>
        <LastCourses />
        <AboutUs />
        <PopularCourses />
        <PresellCourses />
        <LastArticles />
        <Footer />
    </div>
  )
}

export default Index