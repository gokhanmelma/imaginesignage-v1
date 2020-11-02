import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import heroImg from "./../public/images/hero/hero.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUtensils, faGraduationCap, faBuilding, faGifts, faHandHoldingHeart, faMoneyBill, faRoad, faCogs, faShoppingCart, faClipboardList, faCalculator, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const HeroCompany = () => {
	return (
	<div>
		<div className="hero-company">
			<Container>
				<Row>
					<Col className="text-area">	
						<h1>
							Build your Business <br/>As an imAGINE Reseller
						</h1>
						<div className="description">
							Become a reseller of the modern digital signage platform your clients will love.
						</div>
					</Col>
					<Col className="image-area">
						<img src={heroImg} alt="heroImg" />
					</Col>
				</Row>
			</Container>
		</div>
	</div>
)}
export default HeroCompany