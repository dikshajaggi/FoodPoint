import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Card from './Card'
import classnames from 'classnames'
import { CardBody, CardText, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import OfferCard from './OfferCard'

const Offers = () => {

    const [offers, setOffers] = useState([])
    const [paymentOffers, setPaymentOffers] = useState([])

    const [currentActiveTab, setCurrentActiveTab] = useState('1')

    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab)
    }
    useEffect(() => {
        getData()
    })

    async function getData() {
        await axios.get("https://www.swiggy.com/dapi/offers/restaurant?lat=28.7040592&lng=77.10249019999999&offset=0").then(item => {
            console.log(item, "checking item")
            setOffers(item.data.data.cards)
        })

        await axios.get("https://www.swiggy.com/dapi/offers/payment?lat=28.7040592&lng=77.10249019999999&offset=0").then(item => {
            console.log(item.data.data.cards, "payment")
            setPaymentOffers(item.data.data.cards)
        })
    }
    return (
        <div style={{ margin: "10px" }}>
            <div className='offer-banner'>
                <h1>OFFERS</h1>
                <h2>Explore top deals and offers exclusively for you!</h2>
            </div>


            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1') }}
                    >
                        Restaurant offers
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        onClick={() => { toggle('2') }}
                    >
                        Payment offers/ Coupons
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col >
                            <div className='card-wrapper'>
                                {console.log(offers, "filtered data")}
                                {offers?.slice(1)?.map((item) => {
                                    return <Link to={`/rest/${item.data.data.sla.restaurantId}`} style={{ textDecoration: 'none' }} >< Card {...item.data.data} /></Link>
                                })}
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <div className='offer-card-wrapper'>
                            {console.log(paymentOffers, "filtered data")}
                            {paymentOffers?.slice(2)?.map((item) => {
                                return <OfferCard {...item?.data?.data} />
                            })}
                        </div>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Offers
