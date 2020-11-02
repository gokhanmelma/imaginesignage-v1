import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import heroImg from "../public/images/hero/hero.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUtensils, faGraduationCap, faBuilding, faGifts, faHandHoldingHeart, faMoneyBill, faRoad, faCogs, faShoppingCart, faClipboardList, faCalculator, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const HeroFeatures = () => {
	return (
	<div>
		<div className="hero-features">
			<Container>
				<Row>
					<Col md="6" className="image-area">
						<img src={heroImg} alt="heroImg" />
					</Col>
					<Col md="6" className="text-area">	
						<h1>
							Anything is possible with imAGINE Digital Signage
						</h1>
						<div className="description">
							Sign-up to create an account and play your favorite Digital signage at your finger tips
						</div>
						<div className="buttons">
							<Link href="/login/"><a className="btn square-btn-big">Get Started</a></Link>
							<Link href="/register/"><a className="btn square-line-btn-big">Sign Up</a></Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</div>
)}
export default HeroFeatures