import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import app1 from "../public/images/services/Curo.png"
import app2 from "../public/images/services/Gbets.png"
import app3 from "../public/images/services/Maybrands.png"
import app4 from "../public/images/services/OK-Money-Market.png"
import app5 from "../public/images/services/Parel-Vallei.png"
import app6 from "../public/images/services/Petworld.png"
import orangeTxt from "../public/images/txt5.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, faCloudSunRain, faTrafficLight, faEuroSign, faSwimmer, faDove } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab)

const Apps = () => {

	const image_list = [
		faCrow,
		faCloudSunRain,
		faTrafficLight,
		faEuroSign,
		faSwimmer,
		faDove
	]

	const name_list = [
		"ECNA News",
		"Weather",
		"Traffic",
		"Foreign Exchange",
		"Sport",
		"Twitter"
	]

	const settings = {
      customPaging: function(i) {
        return (
          <a>
            <div className="icon text-center">
				<FontAwesomeIcon icon={image_list[i]} className="font-icon"/>
				{/*<img src={image_list[i%2]} alt="image" className="icon-image" />*/}
				<p className="name">{name_list[i]}</p>
			</div>
          </a>
        );
      },
      dots: true,
      dotsClass: "daniil-slick",
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

	return (
	<div className="apps">
		<Container>
			<Row>
				<Col className="text-center">
					<h3>Automated, Engaging Content</h3>
					<p className="sub-title">
					The imAGINE App Market makes us the "smartphone of digital signage." 
					imAGINE's signage software includes apps for almost anything you want to display.
					</p>
				</Col>
			</Row>

			<Slider {...settings}>
				<div>
				<Row className="mt-5 mb-5">
					<Col className="show">
						<img src={app1} alt="image" className="show-img" />
						<div className="color-square"></div>
						<div className="text">
							<h4 className="mt-2 mb-3">ECNA News</h4>
							<p className="description">Sync your Google Calendar accounts 
							to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
							Single Calendar and Overview Modes, and add your own color themes.</p>
						</div>
					</Col>
				</Row>
				</div>

				<div>
				<Row className="mt-5 mb-5">
					<Col className="show">
						<img src={app2} alt="image" className="show-img" />
						<div className="color-square"></div>
						<div className="text">
							<h4 className="mt-2 mb-3">Weather</h4>
							<p className="description">Sync your Google Calendar accounts 
							to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
							Single Calendar and Overview Modes, and add your own color themes.</p>
						</div>
					</Col>
				</Row>
				</div>

				<div>
				<Row className="mt-5 mb-5">
					<Col className="show">
						<img src={app3} alt="image" className="show-img" />
						<div className="color-square"></div>
						<div className="text">
							<h4 className="mt-2 mb-3">Traffic</h4>
							<p className="description">Sync your Google Calendar accounts 
							to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
							Single Calendar and Overview Modes, and add your own color themes.</p>
						</div>
					</Col>
				</Row>
				</div>

				<div>
				<Row className="mt-5 mb-5">
					<Col className="show">
						<img src={app4} alt="image" className="show-img" />
						<div className="color-square"></div>
						<div className="text">
							<h4 className="mt-2 mb-3">Foreign Exchange</h4>
							<p className="description">Sync your Google Calendar accounts 
							to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
							Single Calendar and Overview Modes, and add your own color themes.</p>
						</div>
					</Col>
				</Row>
				</div>

				<div>
				<Row className="mt-5 mb-5">
					<Col className="show">
						<img src={app5} alt="image" className="show-img" />
						<div className="color-square"></div>
						<div className="text">
							<h4 className="mt-2 mb-3">Sport</h4>
							<p className="description">Sync your Google Calendar accounts 
							to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
							Single Calendar and Overview Modes, and add your own color themes.</p>
						</div>
					</Col>
				</Row>
				</div>

				<div>
				<Row className="mt-5 mb-5">
					<Col className="show">
						<img src={app6} alt="image" className="show-img" />
						<div className="color-square"></div>
						<div className="text">
							<h4 className="mt-2 mb-3">Twitter</h4>
							<p className="description">Sync your Google Calendar accounts 
							to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
							Single Calendar and Overview Modes, and add your own color themes.</p>
						</div>
					</Col>
				</Row>
				</div>
			</Slider>
{/*
			<Row>
				<div className="icon text-center">
					<img src={instagram} alt="image" className="icon-image" />
					<p className="name">Social Media Wall</p>
				</div>
				<div className="icon text-center">
					<img src={rss} alt="image" className="icon-image" />
					<p className="name">RSS News Feeds</p>
				</div>
				<div className="icon text-center">
					<img src={instagram} alt="image" className="icon-image" />
					<p className="name">Social Media Wall</p>
				</div>
				<div className="icon text-center">
					<img src={rss} alt="image" className="icon-image" />
					<p className="name">RSS News Feeds</p>
				</div>
				<div className="icon text-center">
					<img src={instagram} alt="image" className="icon-image" />
					<p className="name">Social Media Wall</p>
				</div>
				<div className="icon text-center">
					<img src={rss} alt="image" className="icon-image" />
					<p className="name">RSS News Feeds</p>
				</div>
				<div className="icon text-center">
					<img src={instagram} alt="image" className="icon-image" />
					<p className="name">Social Media Wall</p>
				</div>
				<div className="icon text-center">
					<img src={rss} alt="image" className="icon-image" />
					<p className="name">RSS News Feeds</p>
				</div>
				<div className="icon text-center">
					<img src={instagram} alt="image" className="icon-image" />
					<p className="name">Social Media Wall</p>
				</div>
				<div className="icon text-center">
					<img src={rss} alt="image" className="icon-image" />
					<p className="name">RSS News Feeds</p>
				</div>
				<div className="icon text-center">
					<img src={instagram} alt="image" className="icon-image" />
					<p className="name">Social Media Wall</p>
				</div>
				<div className="icon text-center">
					<img src={rss} alt="image" className="icon-image" />
					<p className="name">RSS News Feeds</p>
				</div>
			</Row>
*/}
		</Container>
	</div>
)}
export default Apps