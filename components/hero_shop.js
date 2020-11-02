import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import Signage from "../public/images/img_gallery_1.jpg"
import heroImg from "../public/images/hero/hero.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUtensils, faGraduationCap, faBuilding, faGifts, faHandHoldingHeart, faMoneyBill, faRoad, faCogs, faShoppingCart, faClipboardList, faCalculator, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const HeroShop = () => {
	return (
	<div>
		<div className="hero-shop">
			<div className="hero-overlay"></div>
			<Container>
				<Row>
					<Col className="text-center">
						<h1>
							Our products
						</h1>
					</Col>
				</Row>
			</Container>
		</div>
	</div>
)}
export default HeroShop