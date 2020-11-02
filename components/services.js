import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'
import Tilt from 'react-tilt'

import hardware1 from "../public/images/img_hardware_1.jpg"
import hardware2 from "../public/images/img_hardware_2.jpg"
import hardware3 from "../public/images/img_hardware_3.jpg"

const Services = () => (
	<div className="services">
		<Container className="wrap">
			<Row>
				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware1} alt="hardware1"/>
							</Col>
							<div className="title">
								Offices
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware2} alt="hardware2"/>
							</Col>
							<div className="title">
								Bars & Nightlife
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware3} alt="hardware3"/>
							</Col>
							<div className="title">
								Retail
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware1} alt="hardware1"/>
							</Col>
							<div className="title">
								Restaurants
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware2} alt="hardware2"/>
							</Col>
							<div className="title">
								Gyms & Fitness
							</div>
						</Row>
					</a></Link>
				</Tilt>
			</Row>
			<Row>
				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware3} alt="hardware3"/>
							</Col>
							<div className="title">
								Dealerships
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware1} alt="hardware1"/>
							</Col>
							<div className="title">
								Banks
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware2} alt="hardware2"/>
							</Col>
							<div className="title">
								Healthcare
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware3} alt="hardware3"/>
							</Col>
							<div className="title">
								Real Estate
							</div>
						</Row>
					</a></Link>
				</Tilt>

				<Tilt
					className="tilt col"
					options={{
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 1000, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
					}}
				>
					<Link href="/"><a>
						<Row>
							<Col className="tilt-image">
								<img src={hardware1} alt="hardware1"/>
							</Col>
							<div className="title">
								Events
							</div>
						</Row>
					</a></Link>
				</Tilt>

			</Row>
			<Row>
				<Col className="text-center">
					<Link href="/"><a className="btn fill-btn mt-4">More Services</a></Link>
				</Col>
			</Row>
		</Container>
	</div>
)
export default Services