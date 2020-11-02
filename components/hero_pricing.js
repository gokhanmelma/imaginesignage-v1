import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import Signage from "../public/images/img_gallery_1.jpg"
import heroImg from "../public/images/hero/hero.jpg"
import img07 from "../public/images/img07.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUtensils, faGraduationCap, faBuilding, faGifts, faHandHoldingHeart, faMoneyBill, faRoad, faCogs, faShoppingCart, faClipboardList, faCalculator, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const HeroPricing = () => {
	return (
	<div>
		<div className="hero">
			<Container>
				<Row>
					<Col className="text-area">	
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
					<Col className="image-area">
						<img src={heroImg} alt="heroImg" />
					</Col>
				</Row>
			</Container>
		</div>
	</div>
)}
export default HeroPricing