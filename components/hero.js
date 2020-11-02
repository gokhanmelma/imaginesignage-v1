import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import Signage from "../public/images/img_gallery_1.jpg"
import heroImg from "../public/images/hero/hero.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUtensils, faGraduationCap, faBuilding, faGifts, faHandHoldingHeart, faMoneyBill, faRoad, faCogs, faShoppingCart, faClipboardList, faCalculator, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
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

		<div className="services">
			<Container>
				<Row className="my-3">
					<Col className="text-center">
						
						<Link href="/industries/retail/">
						<a><div className="block">
								<FontAwesomeIcon icon={faShoppingBasket} className="font-icon" />
								<div className="service-name">Retail</div></div>
						</a>
						</Link>
						
					</Col>
					<Col className="text-center">
						
						<Link href="/industries/restaurants/">
						<a><div className="block">
								<FontAwesomeIcon icon={faUtensils} className="font-icon" />
								<div className="service-name">Restaurants</div></div>
						</a>
						</Link>
						
					</Col>
					<Col className="text-center">
						
						<Link href="/industries/education/">
						<a><div className="block">
								<FontAwesomeIcon icon={faGraduationCap} className="font-icon" />
								<div className="service-name">Education</div></div>
						</a>
						</Link>
						
					</Col>
					<Col className="text-center">
						
						<Link href="/industries/corporate/">
						<a><div className="block">
								<FontAwesomeIcon icon={faBuilding} className="font-icon" />
								<div className="service-name">Corporate</div></div>
						</a>
						</Link>
						
					</Col>
				</Row>

				<Row className="my-3">
					<Col className="text-center">
						
						<Link href="/industries/hospitality/">
						<a><div className="block">
								<FontAwesomeIcon icon={faGifts} className="font-icon" />
								<div className="service-name">Hospitality</div></div>
						</a>
						</Link>
						
					</Col>
					<Col className="text-center">
						
						<Link href="/industries/healthcare/">
						<a><div className="block">
								<FontAwesomeIcon icon={faHandHoldingHeart} className="font-icon" />
								<div className="service-name">Healthcare</div></div>
						</a>
						</Link>
						
					</Col>
					<Col className="text-center">
						
						<Link href="/industries/casino/">
						<a><div className="block">
								<FontAwesomeIcon icon={faMoneyBill} className="font-icon" />
								<div className="service-name">Casino</div></div>
						</a>
						</Link>
						
					</Col>
					<Col className="text-center">
						
						<Link href="/industries/outdoor/">
						<a><div className="block">
								<FontAwesomeIcon icon={faRoad} className="font-icon" />
								<div className="service-name">Outdoor</div></div>
						</a>
						</Link>
						
					</Col>
				</Row>

			</Container>
		</div>
	</div>
)}
export default Hero