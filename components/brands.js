import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import amazon from "../public/images/sponsors/amazon.jpg"
import dropbox from "../public/images/sponsors/dropbox.jpg"
import mit from "../public/images/sponsors/mit.jpg"
import mobil from "../public/images/sponsors/mobil.jpg"
import rams from "../public/images/sponsors/rams.jpg"
import uber from "../public/images/sponsors/uber.jpg"
import valve from "../public/images/sponsors/valve.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const Brands = () => {
	var settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500
	};
	
	return (
	<div className="brands">
		<Container>
			<Slider {...settings}>
				<div className="text-center">
					<img src={amazon} alt="amazon" />
				</div>
				<div>
					<img src={dropbox} alt="dropbox" />
				</div>
				<div>
					<img src={mit} alt="mit" />
				</div>
				<div>
					<img src={mobil} alt="mobil" />
				</div>
				<div>
					<img src={uber} alt="uber" />
				</div>
				<div>
					<img src={valve} alt="valve" />
				</div>
			</Slider>		
		</Container>
	</div>
)}
export default Brands