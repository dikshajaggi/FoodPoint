import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../style.css"
import { UserContext } from '../utilities/context/UserContext'
import Header from '../components/Header'
import { AboutDesc, AboutHeading, AboutWrapper } from './styledComponents/About'

const About = () => {
    const username = useContext(UserContext)
    console.log(username.datajson, "datajson")
    const items = useSelector((store) => store.cart.items)
    console.log(items, items.length, "checking items in store")

    return (
        <AboutWrapper>
            <Header />
            <AboutHeading>About us</AboutHeading>
            <AboutDesc>
                Ipsum qui non non incididunt. Mollit sunt exercitation in laboris cupidatat do sint officia. Est anim nostrud veniam qui ipsum id enim adipisicing.

                Amet laboris dolor voluptate ad ut labore aliqua Lorem nulla cupidatat ad dolore anim dolor. Consectetur deserunt deserunt exercitation reprehenderit in quis quis duis ea ex adipisicing officia. Laboris quis non culpa ut anim ut deserunt tempor do sint consectetur esse elit. Consectetur elit quis veniam irure aliquip cillum ipsum aliquip culpa nisi pariatur dolore. Excepteur aliquip voluptate amet quis esse nisi aliqua sint amet labore.

                Reprehenderit aliquip veniam voluptate exercitation duis laborum. Adipisicing esse enim nulla voluptate velit non elit. Ea consequat velit mollit laborum velit qui velit eu aliquip irure aliquip. Cupidatat magna in aliqua cillum.

                Laborum nisi ex id enim incididunt fugiat occaecat proident ut est ullamco id. Est eu officia excepteur consectetur. Est elit ex Lorem adipisicing deserunt nostrud incididunt. Non tempor commodo culpa qui est ut culpa consequat proident minim. Nulla nulla ea veniam pariatur ipsum amet eu nulla id consectetur.
            </AboutDesc>
        </AboutWrapper>
    )
}

export default About
