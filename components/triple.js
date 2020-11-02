import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import energy from "../public/images/energy-energy.svg"
import insurance from "../public/images/home-insurance.svg"
import card from "../public/images/money-credit-cards.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faDownload, faGamepad } from '@fortawesome/free-solid-svg-icons'


const Triple = () => (
	<div className="triple">
		<Container>
			<div className="hr-one" ></div>
			<div className="hr-two" ></div>
			<Row>
				<Col className="text-center">
					<h3>Clever ways to save a lot, by doing very little</h3>
					<p>Over 50 ways to help you Get Money Calm, from banking to insurance</p>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className="text-center">
					<FontAwesomeIcon icon={faAddressCard} className="font-icon"/>
					<h4>Register Online</h4>
					<p className="description">Our Eligibility Checker tool lets you look for a card without harming your credit file</p>
					<div>
						<Link href="/register/"><a className="btn line-btn">Sign Up</a></Link>
					</div>
				</Col>
				<Col className="text-center">
					<FontAwesomeIcon icon={faDownload} className="font-icon"/>
					<h4>Download & Install</h4>
					<p className="description">Our Eligibility Checker tool lets you look for a card without harming your credit file</p>
					<div>
						<Link href="/download/"><a className="btn line-btn">Download</a></Link>
					</div>
				</Col>
				<Col className="text-center">
					<FontAwesomeIcon icon={faGamepad} className="font-icon"/>
					<h4>Manage</h4>
					<p className="description">Our Eligibility Checker tool lets you look for a card without harming your credit file</p>
					<div>
						<Link href="/login/"><a className="btn line-btn">Sign In</a></Link>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)
export default Triple