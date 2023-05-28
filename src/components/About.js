import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../style.css"
import { UserContext } from '../Utility/Context/UserContext'

const About = () => {
    const username = useContext(UserContext)
    console.log(username.datajson, "datajson")
    const items = useSelector((store) => store.cart.items)
    console.log(items, items.length, "checking items in store")

    return (
        <div className='about'>
            <header>
                <ul className='navbar'>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>HOME</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>ABOUT</li></Link>
                    <Link to="/offers" style={{ textDecoration: 'none' }}><li>OFFERS</li></Link>
                </ul>
                <div className='cart-wrapper'>
                    <h3 className="username">Welcome {username.user}</h3>
                    <Link to="/cart" style={{ textDecoration: 'none' }}><i class="fa-sharp fa-solid fa-cart-shopping"><span className='cart-items-length'>{items.length}</span></i></Link>
                </div>
            </header>
            <h4>About us</h4>
            <div className='about-desc'>
                Ipsum qui non non incididunt. Mollit sunt exercitation in laboris cupidatat do sint officia. Est anim nostrud veniam qui ipsum id enim adipisicing.

                Amet laboris dolor voluptate ad ut labore aliqua Lorem nulla cupidatat ad dolore anim dolor. Consectetur deserunt deserunt exercitation reprehenderit in quis quis duis ea ex adipisicing officia. Laboris quis non culpa ut anim ut deserunt tempor do sint consectetur esse elit. Consectetur elit quis veniam irure aliquip cillum ipsum aliquip culpa nisi pariatur dolore. Excepteur aliquip voluptate amet quis esse nisi aliqua sint amet labore.

                Reprehenderit aliquip veniam voluptate exercitation duis laborum. Adipisicing esse enim nulla voluptate velit non elit. Ea consequat velit mollit laborum velit qui velit eu aliquip irure aliquip. Cupidatat magna in aliqua cillum.

                Laborum nisi ex id enim incididunt fugiat occaecat proident ut est ullamco id. Est eu officia excepteur consectetur. Est elit ex Lorem adipisicing deserunt nostrud incididunt. Non tempor commodo culpa qui est ut culpa consequat proident minim. Nulla nulla ea veniam pariatur ipsum amet eu nulla id consectetur.
            </div>
        </div>
    )
}

export default About
